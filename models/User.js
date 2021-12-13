const { modelNames } = require("mongoose")
const mongoose = require("../db/Basedatos")
const Schema = mongoose.Schema

const usersSchema = new Schema({
    nivel: String,
    nombre: String,
    apellido: String,
    telefono: Number,
    documento: Number,
    email: String,
    contrasena: String
})

const User =mongoose.model('users', usersSchema)

module.exports = User