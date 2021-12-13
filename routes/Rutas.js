const express = require('express')
const rutas= express.Router()
const User = require("../models/User")
const Estate = require ("../models/Estate")

const get_users = async () =>{
    const UsersDatas = await User.find()
    return UsersDatas
}

rutas.get('/get_users', async (req,res) => {
    res.json(await get_users())
}) 

const get_estates = async () =>{
    const EstatesData = await Estate.find()
    return EstatesData
}

rutas.get('/get_estates', async (req,res) => {
    res.json(await get_estates())
}) 

rutas.post('/crear_usuario', async (req,res) => {
    const datos_usuario = req.body

    const user = new User(datos_usuario)
    await user.save()
    res.json({
        mensaje: "Usuario Creado Correctamente"
    })
})

rutas.post('/crear_predio', async (req,res) => {
    const datos_predio = req.body

    const estate = new Estate (datos_predio)
    await estate.save()
    res.json({
        mensaje: "Predio Creado Correctamente"
    })
})


module.exports = rutas