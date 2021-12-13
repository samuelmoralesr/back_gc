//Conexion BD
const mongoose = require('mongoose');

const usuario = 'admi'
const contrasena = 'cSUAo8B32HK9vMAQ'
const nombre_bd = 'gestion_catastral'

const uri_bd = `mongodb+srv://${usuario}:${contrasena}@servidor.wv5gm.mongodb.net/${nombre_bd}?retryWrites=true&w=majority`

mongoose.connect(uri_bd)
    .then(() => console.log("Base de datos conectada"))
    .catch((e) => console.log("error: ", e));

module.exports = mongoose