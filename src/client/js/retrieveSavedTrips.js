let allTrips ="";
function retrieveSavedTrips () {
    document.getElementById('trips').innerHTML= "";
    if (!JSON.parse(localStorage.getItem('trips')) || JSON.parse(localStorage.getItem('trips')) === null || JSON.parse(localStorage.getItem('trips')).length === 0) return;
    document.getElementById('clear').style.display = "block";
    JSON.parse(localStorage.getItem('trips')).forEach(trip => {    
        let bookingURL = trip.chosenHotel
            ? trip.chosenHotel.bookingURL
            : '#';
        let hotelName = trip.chosenHotel
            ? trip.chosenHotel.name
            : "";
        let image = trip.image
            ? `<img class="" src="${trip.image}" alt="${trip.city.name}"/>`
            : "";
        let oneTrip = `
            <div class="card-destination">
                <button class="delete close" onclick="Client.remove(this)" value="${trip.id}" title="delete trip" data-toggle="tooltip" data-placement="left" aria-hidden="true">×</button>    
                <div class="destination-image">
                    ${image}
                </div>
                <div class="country-flag">
                    <span class="flag-icon flag-icon-${trip.city.countryCode.toLowerCase()} flag-icon-squared country-flag-size-2x country-flag-circle"></span>
                </div>
                <div class="destination-info">
                    <div class="place-name">
                        <h2>${trip.city.name} <small>${trip.city.countryName}</small></h2>
                    </div>
                    <div class="place-desc">
                        <div class="current">
                            <h6>Current<br>Weather</h6>
                            <div>
                                <p id="temp">${trip.currentWeather.temp} °C</p>
                                <p id="weather-description">${trip.currentWeather.weather.description}</p>
                            </div>
                            <div>
                                <img id="weather-icon" src="https://www.weatherbit.io/static/img/icons/${trip.currentWeather.weather.icon}.png" width="70px"/>
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
                                <p class="form-control" id="travelDate">${trip.departure}</p>
                                <div class="input-group-prepend">
                                    <div class="input-group-text">to</div>
                                </div>
                                <p class="form-control" id="travelDate">${trip.return}</p>
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
            </div>
        `;
                    
        allTrips = allTrips + oneTrip
    });
    $('#trips').html(allTrips);
}

export { retrieveSavedTrips }