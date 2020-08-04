var express = require('express');
var router = express.Router();
let controller = require('../Controllers/controllersUser.js');
let comprobacion = require('../middlewares/comprobacion.js');


/* GET users listing. */
router.get('/', comprobacion ,controller.busqueda);

module.exports = router

