const mongoose = require('mongoose');
const ropaSchema = new mongoose.Schema({
    descuento: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    coleccion: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        required: true,
    },
    reposicion: {
        type: String,
        required: true,
    },
    ventas:{
        type: Number,
        required: true,
    },
    sudadera: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sudadera"
    }],
})
const Ropa = mongoose.model('Ropa', ropaSchema);
module.exports = Ropa;