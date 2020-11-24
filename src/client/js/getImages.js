const getImages = async (baseUrl,API_KEY,city) => {    
    const res = await fetch(baseUrl+'&key='+API_KEY+'&q='+city); 
    // Example ('https://pixabay.com/api/?category=travel&category=travel&per_page=5&key=API_KEY&q=cairo');   
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error",error);
        return false;
    }
}

export { getImages }