const express = require('express')
const cors = require('cors')
const rutas = require('./routes/Rutas')
const bodyParser = require('body-parser')

const app = express()
const port = 3030
const cors_config = {
    origin: '*'
}

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/api', cors(cors_config), jsonParser, rutas)

app.listen(port, () => {
    console.log('Servidor listo para su uso')
})
