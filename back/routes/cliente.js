'use strict'

var express = require('express');
var clienteController = require('../controllers/ClienteController');

var api = express.Router();
var auth = require('../middlewares/authenticate');


api.get('/listar_clientes_tienda',auth.auth,clienteController.listar_clientes_tienda);
api.get('/obtener_detalles_ordenes_cliente/:id',auth.auth,clienteController.obtener_detalles_ordenes_cliente);
api.get('/obtener_direccion_todos_cliente/:id',auth.auth,clienteController.obtener_direccion_todos_cliente);


module.exports = api;