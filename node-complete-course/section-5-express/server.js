const express = require('express');
const app = express();
const hbs = require ('hbs');

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public/html'))

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('getAuthor', ()=> {
    return 'Jordan';

})

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
})


app.get('/', (request,response) => {
    response.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessage: 'hello san dimas',
        likes: ["Waffles","Lego"],
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs',{
        pageTitle: 'About Page',
    });
})

app.get('/bad', (request, response) => {
    response.send({
        errorMessage:"Error handling request"
    });
})
app.listen(8080, () => {
    console.log("Server Running on port 8080");
});