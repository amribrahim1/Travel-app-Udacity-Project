import { cityAutocomplete } from './js/cityAutocomplete';
import { handleSubmit, selectHotel, saveTrip, clear } from './js/formHandler';
import { retrieveSavedTrips } from './js/retrieveSavedTrips';

import './styles/style.scss';

console.log(JSON.parse(localStorage.getItem('trips')));
retrieveSavedTrips();

// Bootstrap tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// A function to delete one of the trips
function remove(el) {
    let array = JSON.parse(localStorage.getItem('trips'));
    array.splice(array.indexOf($(el).val()), 1);
    $(el).parent().remove();
    localStorage.setItem('trips', JSON.stringify(array))
    el.parentElement.remove();    
    var element = el;
    element.parentElement.remove();
    if (JSON.parse(localStorage.getItem('trips')).length === 0) {
        document.getElementById('clear').style.display = "none";
    }
}

export {
    cityAutocomplete,
    handleSubmit,
    selectHotel,
    saveTrip,
    clear,
    remove
}
