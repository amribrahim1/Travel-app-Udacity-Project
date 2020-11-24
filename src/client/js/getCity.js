const getCity = async (baseUrl,city,username) => {    
   
    const res = await fetch(baseUrl+'&q='+city+'&username='+username); 
    // Example ('http://api.geonames.org/searchJSON?q=Cairo Egypt&maxRows=1&username=username');   
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error",error);
        return false;
    }
}

export { getCity }