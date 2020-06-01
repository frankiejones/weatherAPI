const fetch = require('node-fetch');
const URL = `https://www.potterapi.com/v1/sortinghat`

const sortingHat = async() => {
    let data = await fetch(URL) // promises accepted,rejected,pending.
    console.log(data)
    let jsonData = await data.json() // promise( all this is doing is making the data return in a .json format)
    return jsonData; // show the data that we have now called jsonData in a .json format.
};

module.exports = {
    sortingHat
}