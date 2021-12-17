const express = require('express')
const rutas = express.Router()
const User = require("../models/User")
const Estate = require("../models/Estate")

const get_users = async () => {
    const UsersDatas = await User.find()
    return UsersDatas
}

rutas.get('/get_users', async (req, res) => {
    res.json(await get_users())
})

const get_estates = async () => {
    const EstatesData = await Estate.find()
    return EstatesData
}

rutas.get('/get_estates', async (req, res) => {
    res.json(await get_estates())
})

rutas.post('/crear_usuario', async (req, res) => {
    const datos_usuario = req.body

    const salto = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(datos_usuario.contrasena, salto)
    const nuevo_usuario = {
        nivel: datos_usuario.nivel,
        nombre: datos_usuario.nombre,
        apellido: datos_usuario.apellido,
        gender: datos_usuario.gender,
        telefono: datos_usuario.telefono,
        tipodocumento: datos_usuario.tipodocumento,
        documento: datos_usuario.documento,
        email: datos_usuario.email,
        contrasena: password
    }

    const user = new User(nuevo_usuario)
    await user.save()
    res.json({
        mensaje: "Usuario Creado Correctamente"
    })
})

rutas.post('/crear_predio', async (req, res) => {
    const datos_predio = req.body

    const estate = new Estate(datos_predio)
    await estate.save()
    res.json({
        mensaje: "Predio Creado Correctamente"
    })
})

rutas.delete("/eliminar_predio/:id_estate", async (req, res) => {

    const id_estate = req.params.id_estate
    const estate = Estate.findById(id_estate)
    await estate.deleteOne()

    res.json({
        mensaje: "Predio elimanado correctamente"
    })
})

rutas.delete("/eliminar_usuario/:id_user", async (req, res) => {

    const id_user = req.params.id_user
    const user = User.findById(id_user)
    await user.deleteOne()

    res.json({
        mensaje: "Usuario elimanado correctamente"
    })
})

rutas.put('/editar_usuario/:id_user', async (req, res) => {

    const id_user = req.params.id_user
    await User.updateOne({ _id: id_user }, req.body);

    res.json({
        mensaje: "Usuario editado correctamente"
    })

})

rutas.put('/editar_predio/:id_estate', async (req, res) => {

    const id_estate = req.params.id_estate
    await Estate.updateOne({ _id: id_estate }, req.body);

    res.json({
        mensaje: "Usuario editado correctamente"
    })

})

rutas.get('/get_usuarios', async (req, res) => {
    const usuarios = await User.find()

    res.json(usuarios)
})

rutas.get('/get_user_by_id/:id_user', async (req, res) => {

    const id_user = req.params.id_user
    const user = await User.findById(id_user)

    res.json(user);
})

rutas.get('/get_estate_by_id/:id_estate', async (req, res) => {

    const id_estate = req.params.id_estate
    const estate = await Estate.findById(id_estate)

    res.json(estate);
})


module.exports = rutas