const express = require ('express'); // npm i express
const hbs = require ('express-handlebars'); // npm i express-handlebars
const app = express(); // no npm needed
const bodyParser = require('body-parser')
const path = require('path');
require ('dotenv').config(); // npm i dotenv
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// const getWeather = require('./lib/openWeatherApp'); // because i have imported this single function into index.js i can import functions 
const openWeatherApp = require('./lib/openWeatherApp'); // i have imported the whole file so i can import multiple fucntions using syntac below
// syntax to use functions for imported files is ie openWeatherMap.getWeather();
const harryPotter = require('./lib/harryPotter');


app.use(express.static(path.join(__dirname, 'public'))) //this shortens the path to the public folder tu use whats indie of it.

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}))
// this creates a template layout for the engine to use
app.set('view engine', '.hbs')




app.get ('/', async(req,res) => {
    res.render('index')
});

app.post ('/', async(req,res) => {
    let city = req.body.city
    let data = await openWeatherApp.getWeather(city);
    // let weatherInfo = {
    //     temp:data.main.temp,
    //     name: data.name,
    //     description: data.weather[0].description
    // }

    let temp = data.main.temp
    let name=  data.name
    let description =  data.weather[0].description
    let tempCel = Math.ceil(temp-273.15)
    res.render('index', {data: {temp, name, description, tempCel} })
});



app.get ('/harrypotter', async(req,res) => {
    let data = await harryPotter.sortingHat();
    console.log(data)
    res.render('harrypotter', {datas})
});



app.listen(3000, () => {
    console.log("listening on port 3000")
});



