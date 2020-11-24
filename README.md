# Your favorite choice for a successful trip

# Front-End Web Developer program Nanodegree Program
# Udacity Project 5
# Udacity FEND Travel App

This's a travel application. user can enter the location where you want to travel, travle date and leaving date, then he will get informations about this city: current weather, weather forecast for trip's days if the trip will be in the next 16 days, images of the city and the hotels arroun this location.

User can save the trip after watching the information about the city and choosing a hotel and booking link for this hotel.

User will have got a list of trips planed to, with city name and country, weather and hotel,
and can delete trip from this list or clear it.  

The app uses:
Algolia Places for autocomplete city name in searching,
GeoNames WebServices APIs (Search Location and Find Nearby Hotel),
weatherbit API (providing currunt and forecast weather),
pixabayBase API (providing images for the city)
Node js server side,
WebPack front-end (client side),
jest for testing,
css-loader,
sass-loader,
babel-loader,
file-loader.

You can run it in development mode:
$ npm run build-dev
at port 8080

Or, you can generate dist folder contaning the app:
$ npm run build-prod

You have to run the server to run the AYLIEN api:
$ npm run start
It'll run at port 8081

You can test the functions to make sure that they run successfully (using Jest)
$ npm run test