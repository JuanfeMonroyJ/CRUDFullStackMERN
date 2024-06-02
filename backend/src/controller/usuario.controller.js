const usuarioCtrl = {}

const Usuario = require ('../models/Usuario')

usuarioCtrl.getUsu = async(req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuarioCtrl.createUsu = async(req, res) => {
    const {nombre, apellido, correo, telefono, edad} = req.body;
    const newUsu = new Usuario({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        edad: edad
    })
    await newUsu.save();
    res.json({message: "el usuario ha sido creado"}) 
}
usuarioCtrl.getUsu = async(req, res) => {

}
usuarioCtrl.getUsu = async(req, res) => {

}
usuarioCtrl.getUsu = async(req, res) => {

}