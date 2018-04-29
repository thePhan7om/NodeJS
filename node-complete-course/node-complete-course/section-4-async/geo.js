const request = require("request");


var geoAddress = (address) => {
    
    return new Promise((resolve, reject) => {
        request({
            url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address),
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('There was an error');
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject('Address not found');
                
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng,
                })
                ;
                
            }
        });
    });
    
};

module.exports = {
    geoAddress
};