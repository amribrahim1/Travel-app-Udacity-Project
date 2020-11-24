const getHotels = async (baseUrl,lat,lon) => {    
    
    const res = await fetch(baseUrl+'?lat='+lat+'&lng='+lon); 
    // Example ('https://www.geonames.org/findNearbyHotelsJSON?lat=48.85341&lng=2.3488');   
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error",error);
        return false;
    }
}

export { getHotels }