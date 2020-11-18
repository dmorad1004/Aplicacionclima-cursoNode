const axios = require("axios");


const getClima = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f5c6de8f2e158003d1721c2586988888&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}