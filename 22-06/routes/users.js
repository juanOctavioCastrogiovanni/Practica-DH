var express = require('express');
var router = express.Router();
let controller = require('../Controllers/controllersUser.js');
let path = require('path');
let multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/avatares')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })


/* GET users listing. */
router.get('/register', controller.user);

router.get('/confirmado', controller.confirmado);

router.post('/creando',upload.any(), controller.creando);
module.exports = router;
