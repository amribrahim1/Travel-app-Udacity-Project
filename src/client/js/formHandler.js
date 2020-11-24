import { getCity } from './getCity';
import { getWeather } from './getWeather';
import { getImages } from './getImages';
import { getHotels } from './getHotels';
import { postData } from './postData';
import { updateUI } from './updateUI';

const handleSubmit = event => {
    event.preventDefault();
    document.getElementById('modalBody').style.display = "none";
    document.getElementById('trip').innerHTML = "";
    document.getElementById('departure').innerHTML = "";
    document.getElementById('return').innerHTML = "";
    document.getElementById('temp').innerHTML = "";
    document.getElementById('weather-description').innerHTML = "";
    document.getElementById('weather-icon').innerHTML = "";
    document.getElementById('images').innerHTML = "";
    document.getElementById('forecastWeather').innerHTML = "";  
    document.getElementById('hotelDetails').innerHTML = "";
    document.getElementById('hotelSelect').innerHTML = "<option value='none'>select a hotel</option>";
    document.getElementById('ModalLabel').innerHTML = `
        <div class="text-center m-auto">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>`
    $('#cityModal').modal('show');
    const travelDate = $('#travelDate').val(),
        endDate = $('#endDate').val(),
        geonamesCityBaseUrl = 'http://api.geonames.org/searchJSON?maxRows=1',
        currentWeatherbitBaseUrl = 'https://api.weatherbit.io/v2.0/current',
        forecastWeatherbitBaseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily',
        pixabayBaseUrl = 'https://pixabay.com/api/?category=travel&category=travel&per_page=5',
        geonamesHotelsBaseUrl = 'https://www.geonames.org/findNearbyHotelsJSON',
        username = process.env.geonames_username,
        weatherbit_API_KEY = process.env.weatherbit_KEY,
        pixabay_API_KEY = process.env.pixabay_API_KEY,
        city = $('#city').val(),
        newDate = new Date()
    let allDataArray = {
        city: [],
        currentWeather: [],
        forecastWeather: [],
        images: [],
        hotels: []
    };
    let travelDateIndex, endDateIndex;
    // Function to add days to the currnt date
    // because the API provides with the forecas tWeather for only 16 days
    const addDays = (date, days) => {
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + days)
        return copy
    }
    console.log('Is travl date in the next 16 days? ',(new Date(travelDate))<(addDays(newDate, 16)))
    getCity(geonamesCityBaseUrl,city,username)
    .then(data => {
        const lat = data.geonames[0].lat;
        const lon = data.geonames[0].lng;
        const cityName = data.geonames[0].name;
        allDataArray.city= data.geonames[0]
        Promise.all([
            getWeather(currentWeatherbitBaseUrl,lat,lon,weatherbit_API_KEY),
            getWeather(forecastWeatherbitBaseUrl,lat,lon,weatherbit_API_KEY),
            getImages(pixabayBaseUrl,pixabay_API_KEY,cityName),
            getHotels(geonamesHotelsBaseUrl,lat,lon)
        ]).then(([currentWeather, forecastWeather, images, hotels]) => {
            allDataArray.currentWeather = currentWeather.data[0];
            allDataArray.images = images.hits;
            allDataArray.hotels = hotels.hotels;
            // check if the start date will be in the next 16 days
            if ((new Date(travelDate))<(addDays(newDate, 16))) {
                // Get the start day from API forecastWeather array
                travelDateIndex = forecastWeather.data.findIndex(day => day.datetime === travelDate)
                // check if the end date will be in the next 16 days
                endDateIndex = (new Date(endDate))<(addDays(newDate, 16))
                    ? forecastWeather.data.findIndex(day => day.datetime === endDate)
                    : travelDateIndex+4
                    // check if the end date will NOT be in the next 16 days,
                    // will provide with the forecast Weather for 5 days after start date
                    allDataArray.forecastWeather = forecastWeather.data.filter((_, index) =>  index <= endDateIndex && index >= travelDateIndex);
            }
            // If the start date will NOT be in the next 16 days,
            // will provide with only current weather
            console.log(allDataArray)
            postData('http://localhost:8081/add', allDataArray);
        })
    }).then(newData => {
        setTimeout(() => {  // When I don't use (setTimeout), It's GET data first then POST, so I got UI with the last search city!. I need a solution instead of (setTimeout).
            updateUI(travelDate,endDate) 
        }, 3000);
    })
    document.getElementById('form').reset();
}

export { handleSubmit }
