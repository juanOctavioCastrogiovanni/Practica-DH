

function comprobacion (req, res, next) {
    
    let palabra = req.query.user;
    
    let fallo = "no tiene privilegios."

    switch (palabra) {
        case 'Ada':
          next();
          break;
        case 'Greta':
          next();
          break;        
        case 'Vim':
          next();
          break;
        case 'Tim':
          next();
         break;
        default:
            res.render('admin', {palabra:fallo, url: req.url});
          break;
      }
}

module.exports = comprobacion;