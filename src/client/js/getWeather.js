const getWeather = async (baseUrl,lat,lon,API_KEY) => {    
    
    const res = await fetch(baseUrl+'?lat='+lat+'&lon='+lon+'&key='+API_KEY); 
    // Example ('https://api.weatherbit.io/v2.0/current?lat=21.42664&lon=39.82563&key=API_KEY');   
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error",error);
        return false;
    }
}

export { getWeather }