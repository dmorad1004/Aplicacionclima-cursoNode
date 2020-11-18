const axios = require("axios");


const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');


const { argv } = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para optener el clima',
        demand: true
    }
});

// lugar.getLugarLatLng(argv.direccion).then(console.log)


const getInfo = async (direccion) => {


    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `la temperatura de ${coords.direccion} es de ${temp} grados celsius.`

    } catch (e) {
        return ` no se pudo determinar el clima de ${direccion}`;
    }
};


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);