const fetch = require ("node-fetch"); //  npm i node-fetch

const getWeather = async(city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.APPID}`
    let data = await fetch(url) // promises accepted,rejected,pending.
    let jsonData = await data.json() // promise( all this is doing is making the data return in a .json format)
    return jsonData; // show the data that we have now called jsonData in a .json format.
};

module.exports = {
    getWeather
}; 


// module.exports = getWeather