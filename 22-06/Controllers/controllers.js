let productos = require('../public/data/productsDataBase.json');
const fs = require('fs');
const { unlink } = require('fs-extra');
const sharp = require('sharp');
const path = require('path');


let indexControllers = {
    mostrarIndex: function(req, res) {
      let imagenActual = productos[(productos.length)-1].image;
      imagenActual = imagenActual.substring(1)
        
      unlink('./public/images/' + imagenActual , function (err) {            
        if (err) {                                                 
            console.error(err);                                    
        }                                                          
       console.log('archivo borrado');                           
      });
    
        res.render('index', { productos: productos});
      
    },
    



    mostrarDetalle: function(req, res, next) {
      let idProducto = req.params.id;
    
      let producto = productos.find(function(product) {
        if(product.id == idProducto){
            return product;
        }     
      })
    
      res.render('detalle', {producto : producto});
    },


    
    encontrado: function (req, res) {
      let productosEcontrados = [];
      let palabra = req.query.search;
      palabra = palabra.toLocaleLowerCase();
      productos.forEach(productoEcontrado => {
        let nombre = productoEcontrado.name;
        nombre = nombre.toLocaleLowerCase();
        let num = nombre.search(palabra);
        if (num != -1) {
          productosEcontrados.push(productoEcontrado);
        }
      })

      res.render('encontrado', {
        productos: productosEcontrados,
        palabra: req.query.search
      })
      },



    mostrarTodos: function(req, res) {
      res.render('products', { productos: productos});
      },


    crear: function(req, res) {
      res.render('creacion', { productos: productos});
      },


    eliminar: function(req, res){
         let nuevosProductos = productos.filter(function(products){
          
          if (req.params.id==products.id){
            unlink('./public/images/' + products.image , function (err) {            
              if (err) {                                                 
                  console.error(err);                                    
              }                                                          
             console.log('archivo borrado');                           
            });
          }

           return req.params.id!=products.id
         }) 

         

         let str = JSON.stringify(nuevosProductos,null,4)

         fs.writeFileSync('./public/data/productsDataBase.json', str);
            res.redirect('/')
      },





      
      formularioModificacion: function(req, res, next) {
        let idProducto = req.params.id;
      
        let producto = productos.find(function(product) {
          if(product.id == idProducto){
              return product;
          }     
        })
      
        res.render('formulario', {producto : producto});
      },




      aEliminar: function(req, res, next) {
        let idProducto = req.params.id;
      
        let producto = productos.find(function(product) {
          if(product.id == idProducto){
              return product;
          }     
        })
      
        res.render('borrado', {producto : producto});
      },


      creando: function(req,res,next){
        

        let ruta = path.join('.','public','images', req.files[0].filename)
        let modificado = path.join('.','public','images', 'm' + req.files[0].filename)

        sharp(ruta)
        .resize(800,800)
        .toFile(modificado)
     

        let producto = {
          id: ((productos[(productos.length)-1].id)+1),
          name: req.body.nombre,
          description: req.body.descripcion,
          price: req.body.precio,
          discount: req.body.descuento,
          image: 'm' + req.files[0].filename,
          category: req.body.categoria,
      }

      productos.push(producto);

      let str = JSON.stringify(productos,null,4)

      fs.writeFileSync('./public/data/productsDataBase.json', str);
        
      res.redirect('/');
 
      
      },

      
      editar: function(req,res){
        
        let productoEditar = productos;

        productoEditar.forEach(producto=>{
          if(req.params.id==producto.id){
            producto.name=req.body.nombre
            producto.description=req.body.descripcion
            producto.price=req.body.precio
            producto.discount=req.body.descuento
            producto.category=req.body.categoria
          }
        })

        
        let str = JSON.stringify(productoEditar,null,4)

         fs.writeFileSync('./public/data/productsDataBase.json', str);
            res.redirect('/')
    }

      
    /*modificar: function(req,res){
      let str = JSON.stringify(nuevosProductos,null,4)

      fs.writeFileSync('./public/data/productsDataBase.json', str);
         res.redirect('/')
    }
    */
  }
    
    

    
module.exports = indexControllers;