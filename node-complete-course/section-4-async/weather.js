
const request = require("request");


var getWeather = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/${apiKey}/${address.latitude},${address.longitude}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('There was an error');
            }
            else if (response.statusMessage === 'OK') {
                resolve({
                    latitude: body.latitude,
                    longitude: body.longitude,
                    timezone: body.timezone,
                    currentWeather: body.currently.summary,
                    temperature: body.currently.temperature,
                });
            
            }
        });
    });
};

module.exports = {
    getWeather
};