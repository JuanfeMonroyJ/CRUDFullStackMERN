const express = require('express')
const cors = require('cors')
const app = express();

// Configuración
app.set('port', process.env.PORT || 4000)

// Middlewares
app.use(cors())
app.use(express.json())

// Rutas

app.get('/', (req, res)=>{
    res.send('Bienvenido a mi api rest full');
})

module.exports = app;