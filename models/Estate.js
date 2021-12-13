const { modelNames } = require("mongoose")
const mongoose = require("../db/Basedatos")
const Schema = mongoose.Schema

const usersSchema = new Schema({
    nombre: String,
    documento: Number,
    area: Number,
    areac : Number,
    direccion: String,
    barrio: String ,
    estrato: Number
})

const Estate =mongoose.model('estates', usersSchema)

module.exports = Estate