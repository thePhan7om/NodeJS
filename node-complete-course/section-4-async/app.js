console.log("Starting App.js");

const yargs = require("yargs");
const geo = require("./geo");
const weather = require("./weather");

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


geo.geoAddress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 4));
        weather.getWeather(result, (errorMessage, weatherReport) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherReport, undefined, 4));
            }
            
        });
        
    }
});

//''

