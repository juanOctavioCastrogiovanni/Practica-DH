var express = require('express');
var router = express.Router();
let sessionMiddleware = require('../middlewares/session.js')
let cookieMiddleware = require('../middlewares/cookie.js')

/* GET home page. */
router.get('/',[sessionMiddleware,cookieMiddleware],function(req, res, next) {
  let color;
  if(req.query.olvidar == 'yes'){
    res.clearCookie('elColor');
  }

 if (req.cookies.elColor != undefined){
  color = req.cookies.elColor;
  
 }
 if(req.session.color != undefined){
  color = req.session.color; 
 } 
 res.render('index', {
   color:color
 })
});

module.exports = router;
