let fs = require('fs');
let usuarios = require('../public/data/userDataBase.json');



let userControllers = {
    user: function(req, res) {
        res.render('user');
      },
    
    creando: function(req, res, next) {

      let usuarioNuevo = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        contraseña: req.body.contraseña,
        imagen: req.files[0].filename
      };

      usuarios.push(usuarioNuevo);

      let str = JSON.stringify(usuarios,null,4)

         fs.writeFileSync('./public/data/userDataBase.json', str);
            res.redirect('/users/confirmado')
      
    },

    confirmado: function(req, res) {
      let usuarioActual = usuarios[(usuarios.length)-1];
      res.render('confirmado', {usuarioActual:usuarioActual});
    },

    busqueda: function (req, res){
      res.render('admin', {palabra:req.query.user, url: req.url});
    } 
}

module.exports = userControllers;