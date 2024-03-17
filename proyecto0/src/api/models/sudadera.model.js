const mongoose = require('mongoose');
const sudaderaSchema = new mongoose.Schema({
    modelo: {
        type: String,
        required: true,
    },
    talla: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: false,
    },
    codigo: {
        type: Number,
        required: true,
    },
})
const Sudadera = mongoose.model('Sudadera', sudaderaSchema);
module.exports = Sudadera;