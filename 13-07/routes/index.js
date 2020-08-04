var express = require('express');
var router = express.Router();
const db = require('../database/models')
const Op = require('sequelize').Op

let controller = require('../Controllers/controllers.js');


/* GET home page. */
router.get('/', controller.mostrarIndex);

router.get('/search', controller.encontrado);

router.get('/products', controller.mostrarTodos);

router.get('/crear', controller.crear);

router.post('/creado', controller.creando);



router.get('/peliculas', (req,res)=>{
    db.Movie.findAll().then(result => {
        res.json(result)
    }).catch(err => {
        console.log(err)
        res.json({'error': true})
    })
}) 

router.get('/peliculas/:id', (req,res)=> {
    db.Movie.findByPk(req.params.id).then(result => {
        res.json(result)
    }).catch(err => {
        console.log(err)
        res.json({'error': true})
    })
})

router.get('/peliculas-orden', (req,res)=> {
    db.Movie.findAll({
        limit: 5,
        order: [
            ['release_date', 'DESC']
        ]
    }).then(result => {
        res.json(result)
    }).catch(err => {
        console.log(err)
        res.json({'error': true})
    })
})

router.get('/peliculas-mejor-rating', (req,res)=> {
    db.Movie.findAll({
        where: {
            rating : {
                [Op.gte]: 8
            }
        }
    }).then(result => {
        res.json(result)
    }).catch(err => {
        console.log(err)
        res.json({'error': true})
    })
})



module.exports = router;
