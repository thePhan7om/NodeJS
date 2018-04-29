const yargs = require("yargs");
const axios = require("axios");
const apiKey = '6d90d8efba43ccc51485b626187f70a5'

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
    .help()
    .alias('help', 'h')
    .argv;

var geoURL = "http://maps.googleapis.com/maps/api/geocode/json";
axios.get(geoURL, {
    params: {
        address: argv.address,
    }
}).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error ("Unable to find address");
    }else if (response.data.status === 'OVER_QUERY_LIMIT'){
        throw new Error ("Stupid google try again");
    }else{
        console.log(`Getting Weather for: ${response.data.results[0].formatted_address}` );
        let lat = response.data.results[0].geometry.location.lat;
        let lng = response.data.results[0].geometry.location.lng;
        let weatherURL = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
        return axios.get(weatherURL).then( (response2) => {
          let weatherdata =parseData(response2);
            console.log(JSON.stringify(weatherdata, undefined, 4));
        });
    }
        
    
}).catch((e) => {
    
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API Server');
    }
   else{
        console.log(e.message);
    }
})

function parseData(data){
    let weatherData = {
        latitude: data.data.latitude,
        longitude: data.data.longitude,
        timezone: data.data.timezone,
        currentWeather: data.data.currently.summary,
        temperature: data.data.currently.temperature,
    };
    return weatherData;
}