const apiKey = '6d90d8efba43ccc51485b626187f70a5'
const request = require("request");


var getWeather = (address, callback) => {
    
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${address.latitude},${address.longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('There was an error', undefined);
        }
        else if (response.statusMessage === 'OK') {
            callback(undefined, {
                latitude: body.latitude,
                longitude: body.longitude,
                timezone: body.timezone,
                currentWeather: body.currently.summary,
                temperature: body.currently.temperature,
            }) ;
            
        }
    });
};

module.exports = {
    getWeather
};