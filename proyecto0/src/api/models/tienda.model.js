const mongoose = require('mongoose');
const tiendaSchema = new mongoose.Schema({
    personal: {
        type: String,
        required: true,
    },
    ubicacion: {
        type: String,
        required: true,
    },
    horario: {
        type: Number,
        required: true,
    },
    cliente: {
        type: String,
        required: true,
    },
    web: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: false,
    },
    ropa: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Ropa"
    }],
})
const Tienda = mongoose.model('Tienda', tiendaSchema);
module.exports = Tienda;