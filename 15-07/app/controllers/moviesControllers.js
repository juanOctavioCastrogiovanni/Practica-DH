let fs = require('fs')
let Op = require('sequelize').Op
let db = require('../database/models')
let prevActors = require('../prevActors.json')




moviesControllers = {
    list: (req,res)=> {
        db.Movie.findAll({
            include: ['genreRelationship','actors']
        }).then(movies => {
            let ultimas5 = true 
            let recommended = false
            //res.json(movies)
            res.render('moviesList', {
            movies:movies,
            ultimas5:ultimas5,
            recommended: recommended
            })
        }).catch(err => {
                console.log(err)
            })
    },
    detail: (req,res) => {
        db.Movie.findOne({
            where: {id:req.params.id},
            include: ['genreRelationship', 'actors']
        }).then(movie => {
            res.json(movie)})
    },
    new: (req,res) => {
        db.Movie.findAll({
            limit: 5,
            order: [
                ['release_date', 'DESC']
        ],
        
            include: ['genreRelationship']
        
        }).then(movies => {
            let ultimas5 = true 
            let recommended = false
            res.render('moviesList', {
            movies:movies,
            ultimas5:ultimas5,
            recommended: recommended
        })
        }).catch(err => {
            console.log(err)
            res.json({error: true})
        })
    },
    recommended: (req,res)=>{
        db.Movie.findAll({
            where: {
                rating: {
                [Op.gte]: 8
            }}
        }).then(movies => {
            let ultimas5 = false;
            let recommended= true;
            res.render('moviesList', {
            movies:movies,
            ultimas5:ultimas5,
            recommended: recommended
        })
        })
        .catch(err => {
            res.json({error: true})
        })
    },
    search: (req,res) => {
        db.Movie.findAll({
            where: {
                title: {
                    [Op.substring]:req.body.search
                }
            }
        })
        .then(movies => {
            let ultimas5 = false;
            let recommended= true;
            res.render('moviesList', {
            movies:movies,
            ultimas5:ultimas5,
            recommended: recommended
        })
        })
        .catch(err => {
            res.json({error: true})
        })
    },
    create: (req,res) => {
        

        db.Genre.findAll()
        .then(genres => {
            res.render('createForm', {
                genres:genres,
                prevActors:prevActors
            })
        })
        .catch(err => {
            res.json({error: true})
        })
    },
    createActor: (req,res) => {
        let urlAction = 'creacion'
        res.render('createActor',{urlAction:urlAction,id:req.params.id});
    },

    crearActorCompleto: async function (req,res){
        db.Actor.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.ratingActor
       })   
       let ultimoActor = await db.Actor.findOne({
           order: [
               ['id','DESC']
           ]
       })
       
       let movie = await db.Movie.findByPk(req.params.id)

       movie.addActor((ultimoActor.id)+1)

      res.redirect('/movies/'+ req.params.id + '/lista-actores')

    },

     actors: (req,res) => {
        let actor = {
            nameActor: req.body.first_name,
            lastName: req.body.last_name,
            rating: req.body.ratingActor
        }

        prevActors.push(actor);

        let str = JSON.stringify(prevActors,null,4)

        fs.writeFileSync('prevActors.json', str);
        res.redirect('/movies/form')
     },

    save: function (req,res){
         
    db.Movie.create(req.body)

        

     prevActors.forEach((actor)=>{
                    db.Actor.create({
                         first_name:actor.nameActor,
                         last_name: actor.lastName,
                         rating: actor.rating
                    })   
    }) 
       res.redirect('/movies') 
},
    crear: async function (req,res) {
        let movie = await db.Movie.findOne({
            order: [
                  ["id","DESC"],    
            ]
        })
    
        let cant = prevActors.length
    
        let actors = await db.Actor.findAll({
            limit: cant, 
            order: [
                  ["id","DESC"],    
            ]
        })
        let actorsId = [];
      
        actors.forEach(actor => {
            actorsId.push(actor.id)
        })
    
        movie.addActor(actorsId)
        let str = '[]'
        fs.writeFileSync('prevActors.json', str);
            
       res.redirect('/movies')
             
  },
  
     delete: (req,res)=> {


         db.Movie.destroy({
             where: {
                 id: req.params.id
             }
         })

         res.redirect('/movies')
     },
     edit: (req,res) => {
        let giveFilm = db.Movie.findByPk(req.params.id)

        let giveAllGenres = db.Genre.findAll()

        

        Promise.all([giveFilm,giveAllGenres])
         .then(([giveFilm,giveAllGenres]) => {
             res.render('editForm', {movie:giveFilm, genres:giveAllGenres})
         })
         .catch(err => {
             res.json({error: true})
         })
     },
     listadeActores: (req,res)=>{
        db.Movie.findByPk(req.params.id,{
            include:['actors']
        }).then(actores => {
            res.render('listaActoresPelicula', {
                movie:actores
            })
        })
        },
        deleteActor: async function (req,res) {
            let movie = await db.Movie.findByPk(req.params.id)

            movie.removeActor(req.params.id_actor)

            res.redirect('/movies/'+ req.params.id + '/lista-actores')
        },
     listaActores: (req,res)=> {
        db.Actor.findAll().then(result => {
            res.render('listaActores', {
                actores: result,
                id_pelicula:req.params.id
            })
        })
     },
     elBorrado: (req,res) => {
        db.Actor.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/movies/'+req.params.id+'/actores-para-agregar')
     },
     borrarActor: (req,res) => {
        db.Actor.findAll()
        .then(listaActores => {res.render('listaActoresBorrado', {actores:listaActores})})
     },
     crearActor: function (req,res){
        let urlAction = 'lista'
        res.render('createActor',{urlAction:urlAction,
        id:req.params.id})
     },
     agregar: async function (req,res) {
        let movie = await db.Movie.findByPk(req.params.id)
        

        movie.addActor(req.params.idActor)


        res.redirect('/movies/'+ req.params.id + '/lista-actores')

     },
     saveEdit:(req,res) => {
        db.Movie.update({
            title: req.body.title,
            awards: req.body.awards,
            length: req.body.length,
            rating: req.body.rating,
            release_date:req.body.release_date,
            genre_id: req.body.genre_id
        },{
            where:{
                id:req.params.id
            }
        })

        res.redirect('/movies')

     }

}


module.exports = moviesControllers;
