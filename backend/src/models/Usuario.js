const { schema, model } = require('mongoose')

const usuarioSchema = new schema({
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    correo: String
},
    {
        timestamps: true
    })

module.exports = model('Usuario', usuarioSchema)
