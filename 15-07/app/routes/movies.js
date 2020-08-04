var express = require('express');
var router = express.Router();
var movieControllers = require('../controllers/moviesControllers');

/* GET home page. */
router.get('/', movieControllers.list);

router.get('/new', movieControllers.new);

router.get('/recommended', movieControllers.recommended);

router.get('/form', movieControllers.create);

router.post('/form/complete', movieControllers.actors)

router.get('/formActor', movieControllers.createActor);

router.get('/actualizar', movieControllers.crear);

router.post('/form', movieControllers.save);

router.get('/borrar-actor', movieControllers.borrarActor)

router.post('/search', movieControllers.search)

router.get ('/:id/lista-actores', movieControllers.listadeActores)

router.get('/:id', movieControllers.detail);

router.get('/:id/form', movieControllers.edit);

router.put('/:id/form', movieControllers.saveEdit);

router.delete('/:id/borrar-el-actor', movieControllers.elBorrado)

router.get ('/:id/actores-para-agregar', movieControllers.listaActores)

router.delete('/:id', movieControllers.delete)

router.post('/:id/creacion-actor', movieControllers.crearActorCompleto)

router.get('/:id/crear-actor',movieControllers.crearActor)



router.delete('/:id/:id_actor', movieControllers.deleteActor)

router.get('/:id/:idActor/agregar-a-pelicula', movieControllers.agregar)



module.exports = router;
