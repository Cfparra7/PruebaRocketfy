var Cliente = require('../models/Cliente');
var Venta = require('../models/Venta');
var Dventa = require('../models/Dventa');


var Direccion = require('../models/Direccion');



listar_clientes_tienda = async function(req,res){
    if(req.user){
        var clientes = await Cliente.find();
        res.status(200).send({data:clientes});
    }else{
        res.status(500).send({message: 'NoAccess'});
    } 
} //sí


const obtener_direccion_todos_cliente  = async function(req,res){
    if(req.user){
        var id = req.params['id'];
        let direcciones = await Direccion.find({cliente:id,status:true}).populate('cliente').sort({createdAt:-1});
        res.status(200).send({data:direcciones});
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
} //sí

const obtener_detalles_ordenes_cliente  = async function(req,res){
    if(req.user){
        var id = req.params['id'];

        try {
            let venta = await Venta.findById({_id:id}).populate('direccion').populate('cliente');
            let detalles = await Dventa.find({venta:venta._id}).populate('producto').populate('variedad');
            res.status(200).send({data:venta,detalles:detalles});

        } catch (error) {
            console.log(error);
            res.status(200).send({data:undefined});
        }
            
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
} //sí



module.exports = {

    listar_clientes_tienda,
    obtener_direccion_todos_cliente,
    obtener_detalles_ordenes_cliente,

}