const mongoose = require('mongoose');

const usuariosCollection = 'mflix';

const usuariosSchema = new mongoose.Schema({
	nombre: { type: String },
	apellido: { type: String },
	dni: { type: Number }
})

const usuarios = new mongoose.model(usuariosCollection, usuariosSchema);

module.exports = usuarios;