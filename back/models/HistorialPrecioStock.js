'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HistorialPrecioStockSchema = Schema({
    productoId: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: false,
    },
    stock: {
        type: Number,
        required: false,
    },
    titulo: {
        type: String,
        required: false},
    sku: {
        type: String,
        required: false},
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },

});

module.exports =  mongoose.model('HistorialPrecioStock',HistorialPrecioStockSchema);