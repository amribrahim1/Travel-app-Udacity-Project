import { retrieveSavedTrips } from './retrieveSavedTrips';

const saveTrip = async () => {   
    const request = await fetch('http://localhost:8081/all');    
    try {
        const allData = await request.json();
        let itemsArray = localStorage.getItem('trips')
            ? JSON.parse(localStorage.getItem('trips'))
            : []
        let newItem = {
            id: "",
            departure: "",
            return: "",
            city: {},
            currentWeather: {},
            forecastWeather: {},
            chosenHotel: {},
            image: ""
        }
        newItem = {
            id: 1,
            departure: $('#departure').html(),
            return: $('#return').html(),
            city: allData.city,
            currentWeather: allData.currentWeather,
            forecastWeather: allData.forecastWeather
        }
        if (JSON.parse(localStorage.getItem('trips'))!=null) {
            newItem.id = JSON.parse(localStorage.getItem('trips')).length+1
        }
        if(document.getElementById('hotelName')!=null) {
            newItem.chosenHotel = {
                name: document.getElementById('hotelName').innerHTML,
                bookingURL: document.getElementById("hotelName").getAttribute("href")
            }
        }
        if (allData.images.length!==0) {
            newItem.image = allData.images[0].webformatURL;
        }

        itemsArray.push(newItem);
        localStorage.setItem('trips', JSON.stringify(itemsArray))

        let bookingURL = newItem.chosenHotel
            ? newItem.chosenHotel.bookingURL
            : '#';
        let hotelName = newItem.chosenHotel
            ? newItem.chosenHotel.name
            : "";
        let image = newItem.image
            ? `<img class="" src="${newItem.image}" alt="${newItem.city.name}"/>`
            : "";
        const div = document.createElement('div')
        div.classList.add("card-destination");
        let oneTrip = `
            <button class="delete close" onclick="Client.remove(this)" value="${trip.id}" title="delete trip" data-toggle="tooltip" data-placement="left" aria-hidden="true">×</button> 
            <div class="destination-image">
                ${image}
            </div>
            <div class="country-flag">
                <span class="flag-icon flag-icon-${newItem.city.countryCode.toLowerCase()} flag-icon-squared country-flag-size-2x country-flag-circle"></span>
            </div>
            <div class="destination-info">
                <div class="place-name">
                    <h2>${newItem.city.name} <small>${newItem.city.countryName}</small></h2>
                </div>
                <div class="place-desc">
                    <div class="current">
                        <h6>Current<br>Weather</h6>
                        <div>
                            <p id="temp">${newItem.currentWeather.temp} °C</p>
                            <p id="weather-description">${newItem.currentWeather.weather.description}</p>
                        </div>
                        <div>
                            <img id="weather-icon" src="https://www.weatherbit.io/static/img/icons/${newItem.currentWeather.weather.icon}.png" width="70px"/>
                        </div>
                    </div>
                </div>
                <div class="below-line"></div>
                <div class="destination-hastag">
                    <div class="col-auto">
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">from</div>
                            </div>
                            <p class="form-control" id="travelDate">${newItem.departure}</p>
                            <div class="input-group-prepend">
                                <div class="input-group-text">to</div>
                            </div>
                            <p class="form-control" id="travelDate">${newItem.return}</p>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">Hotel</div>
                            </div>
                            <a class="form-control" id="travelDate" href="${bookingURL}">${hotelName}</a>
                        </div>
                    </div>
                </div>
            </div>            
        `;
        div.innerHTML = oneTrip
        document.getElementById('trips').appendChild(div);
        document.getElementById('clear').style.display = "block";
    }
    catch (error) {
        console.log("error", error);
    }
    $('#cityModal').modal('hide');
}

const clear = () => {
    localStorage.clear();
    retrieveSavedTrips();
}

export {
    saveTrip,
    clear
}