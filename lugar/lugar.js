const axios = require("axios");



const getLugarLatLng = async (dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}`,
        headers: { 'x-api-key': 'f5c6de8f2e158003d1721c2586988888' }
    });



    const resp = await instance.get();

    const data=resp.data
    const direccion=data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;




    return {
        direccion,
        lat,
        lng
    }

}




module.exports={
    getLugarLatLng
}
