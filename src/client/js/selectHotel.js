const selectHotel = async () => {
    const selectedHotel = document.getElementById('hotelSelect').value;
    const request = await fetch('http://localhost:8081/all');
    try {
        const allData = await request.json();
        const chosenHotel = allData.hotels.find(hotel => hotel.hotelName === selectedHotel);
        document.getElementById('hotelDetails').innerHTML = "";
        if (selectedHotel!== "none") {
            document.getElementById('hotelDetails').innerHTML = `
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Name</div>
                    </div>
                    <a class="form-control" id="hotelName" title="Booking URL" href="${chosenHotel.bookingURLs[0].bookingURL}">${chosenHotel.hotelName}</a>
                </div>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Address</div>
                    </div>
                    <p class="form-control" id="hotelAddress">${chosenHotel.address}</p>
                </div>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Distance</div>
                    </div>
                    <p class="form-control" id="hotelDistance">${chosenHotel.distance.toFixed(2)} KM</p>
                </div>
            `;
        }

    }
    catch (error) {
        console.log("error", error);
    }
}

export { selectHotel }