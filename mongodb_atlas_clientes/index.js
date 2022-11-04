const mongoose = require('mongoose');
const usuarios = require('./models/usuarios.js');

const users = [
	{ nombre: 'Joe', apellido: 'Phaz', dni: '234895435' },
	{ nombre: 'Michael', apellido: 'Gazp', dni: '234895436' },
	{ nombre: 'Tomas', apellido: 'Anderson', dni: '234895437' },
	{ nombre: 'Carlos', apellido: 'Lopez', dni: '234895439' }
];

const mon = async () => {
	const CS = 'mongodb+srv://user:<1234>@cluster0.abqgvzp.mongodb.net/?retryWrites=true&w=majority';
	try {
		await mongoose.connect(CS);
		// const response = await usuarios.insertMany(users);
		// console.log(response);
		const response = await usuarios.updateOne({ dni: 26935670 }, { $set: { nombre: 'Juan Carlos' } });
		console.log(response);
	} catch (err) {
		console.log(err);
	}
}

mon();