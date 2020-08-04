let fs = require('fs')
let Op = require('sequelize').Op
let db = require('../database/models')
let prevActors = require('../prevActors.json')




moviesControllers = {
    list: (req,res)=> {
        db.Movie.findAll({
            include: ['genreRelationship','actors']
        }).then(movies => {
            res.json(movie)
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
            res.json(movie)
        
        }).catch(err => {
            console.log(err)
            res.json({error: true})
        })
    },
    // recommended: (req,res)=>{
    //     db.Movie.findAll({
    //         where: {
    //             rating: {
    //             [Op.gte]: 8
    //         }}
    //     }).then(movies => {
    //         let ultimas5 = false;
    //         let recommended= true;
    //         res.render('moviesList', {
    //         movies:movies,
    //         ultimas5:ultimas5,
    //         recommended: recommended
    //     })
    //     })
    //     .catch(err => {
    //         res.json({error: true})
    //     })
    // },
    search: (req,res) => {
        db.Movie.findAll({
            where: {
                title: {
                    [Op.substring]:req.body.search
                }
            }
        })
        .then(movies => {
            res.json(movie)
        
        })
        .catch(err => {
            res.json({error: true})
        })
    },
    // create: (req,res) => {
        

    //     db.Genre.findAll()
    //     .then(genres => {
    //         res.render('createForm', {
    //             genres:genres,
    //             prevActors:prevActors
    //         })
    //     })
    //     .catch(err => {
    //         res.json({error: true})
    //     })
    // },
    // createActor: (req,res) => {
    //     let urlAction = 'creacion'
    //     res.render('createActor',{urlAction:urlAction,id:req.params.id});
    // },

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
       res.redirect('/api/movie') 
},
    crear: async function (req,res) {
        
             
  },
  
     delete: (req,res)=> {


         db.Movie.destroy({
             where: {
                 id: req.params.id
             }
         })

         res.redirect('/api/movies')
     },
     edit: (req,res) => {
        
     },
     listadeActores: (req,res)=>{
        db.Movie.findByPk(req.params.id,{
            include:['actors']
        }).then(actores => {
            res.json(actores)
        })
        },
        deleteActor: async function (req,res) {
            let movie = await db.Movie.findByPk(req.params.id)

            movie.removeActor(req.params.id_actor)

            res.json('/api/movies')
        },
     listaActores: (req,res)=> {
        db.Actor.findAll().then(result => {
            res.json(resul)
        })
     },
     elBorrado: (req,res) => {
        db.Actor.destroy({
            where: {
                id: req.params.id
            }
        })

     
        res.redirect('/api/movies')
     },
     borrarActor: (req,res) => {
        db.Actor.findAll()
        .then(listaActores => {res.json(listadoActores)})
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
