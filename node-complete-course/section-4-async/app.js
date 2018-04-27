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

geo.geoAddress(argv.address).then((result) => {
    return (weather.getWeather(result));
}).then((forcast) => {
    console.log(JSON.stringify(forcast, undefined, 4));
}).catch((errorMessage) => {
    console.log(errorMessage);
});

