const cityAutocomplete = (() => {
    places({
        appId: process.env.algolia_ID,
        apiKey: process.env.algolia_API_KEY,
        container: document.querySelector('#city'),
        templates: {
            suggestion: function(suggestion) {
                return '<i class="flag ' + suggestion.countryCode + '"></i> ' + suggestion.name + ', ' +  suggestion.country
            },
            value: function(suggestion) {
                return suggestion.name + ' ' +  suggestion.countryCode
            }
        }
    }).configure({
        type: 'city',
        aroundLatLngViaIP: false
    });
})();

export { cityAutocomplete }
