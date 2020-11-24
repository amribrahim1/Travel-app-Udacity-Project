# Your favorite choice for a successful trip

## Front-End Web Developer program Nanodegree Program
## Udacity Project 5
## Udacity FEND Travel App

### Demo: https://amribrahim1.github.io/Travel-app-Udacity-Project/

This's a travel application. user can enter the location where you want to travel, travle date and leaving date, then he will get informations about this city: current weather, weather forecast for trip's days if the trip will be in the next 16 days, images of the city and the hotels arroun this location.

User can save the trip after watching the information about the city and choosing a hotel and booking link for this hotel.

User will have got a list of trips planed to, with city name and country, weather and hotel,
and can delete trip from this list or clear it.  

The app uses:<br/>
- [Algolia Places](https://community.algolia.com/places) for autocomplete city name in searching,
- [GeoNames WebServices](http://www.geonames.org/export/ws-overview.html) APIs ([Search Location](https://www.geonames.org/export/geonames-search.html) and [Find Nearby Hotel](http://www.geonames.org/hotel)),
- [weatherbit API](https://www.weatherbit.io/api) (providing [currunt weather](https://www.weatherbit.io/api/weather-current) and [forecast weather](https://www.weatherbit.io/api/weather-forecast-16-day)),
- pixabayBase API (providing images for the city)
- Node js server side,
- WebPack front-end (client side),
- jest for testing,
- css-loader,
- sass-loader,
- babel-loader,
- file-loader.

You can run it in development mode:<br/>
`$ npm run build-dev` <br/>
at port 8080

Or, you can generate dist folder contaning the app:<br/>
`$ npm run build-prod`

You have to run the server to run the AYLIEN api:<br/>
`$ npm run start` <br/>
It'll run at port 8081

You can test the functions to make sure that they run successfully (using Jest)<br/>
`$ npm run test`
