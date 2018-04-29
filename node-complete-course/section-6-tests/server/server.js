const express = require ('express');

var app = express();

app.get('/', (request, response) => {
    response.send('Hello World');
    });

app.get('/users', (request,response) => {
    
    response.send([{name:'jordan', age:35},{name:'claire',age:36},{name:'darcy',age:6},{name:'jackson',age:4}]);
})
app.listen(3000);

module.exports.app=app;