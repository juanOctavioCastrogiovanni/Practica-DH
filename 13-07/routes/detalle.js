var express = require('express');
var router = express.Router();
let productos = require('../public/data/productsDataBase.json');
let controller = require('../Controllers/controllers.js');


/* GET home page. */
router.get('/:id', controller.mostrarDetalle);

router.get('/:id/eliminar', controller.aEliminar);

router.delete('/:id/eliminado', controller.eliminar);

router.get('/:id/editar', controller.formularioModificacion);

router.put('/:id/editar', controller.editar)

//


module.exports = router;
