console.log("Starting App.js");

const request = require("request");
const yargs = require("yargs");

const argv = yargs.options({
    a:{
        demand:true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string:true
    }
})
    .help()
    .alias('help','h')
    .argv;


request({
    url:'http://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(argv.address),
    json:true
}, (error, response,body) =>{
console.log(JSON.stringify(body,undefined,4));
console.log(`Address ${body.results[0].formatted_address}`);
    console.log(`Lat ${body.results[0].geometry.location.lat}`);
    console.log(`lng ${body.results[0].geometry.location.lng}`);
    
    
})