var express = require('express');
var router = express.Router();
let path = require('path');
let multer = require('multer');
let controller = require('../Controllers/controllers.js');




var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })





/* GET home page. */
router.get('/', controller.mostrarIndex);

router.get('/search', controller.encontrado);

router.get('/products', controller.mostrarTodos);

router.get('/crear', controller.crear);

router.post('/creado',upload.any(), controller.creando);


module.exports = router;
