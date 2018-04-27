const request = require("request");


var geoAddress = (address, callback) => {
    
    request({
        url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address),
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('There was an error',undefined);
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('Address not found',undefined);
            
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng,
            })
            ;
            
        }
    });
};

module.exports = {
    geoAddress
};