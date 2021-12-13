const { modelNames } = require("mongoose")
const mongoose = require("../db/Basedatos")
const Schema = mongoose.Schema

const usersSchema = new Schema({
    nivel: String,
    nombre: String,
    apellido: String,
    gender: String,
    telefono: Number,
    tipodocumento: String,
    documento: Number,
    email: String,
    contrasena: String
})

const User =mongoose.model('users', usersSchema)

module.exports = User