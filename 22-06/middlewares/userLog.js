const fs = require ('fs')

function middlewareLog (req, res, next) {
    let url = req.url;
    if((url.indexOf('/images/') == -1)&&(url.indexOf('/style') == -1)){
    fs.appendFileSync('userLog.txt', 'El usuario ingresó a la ruta:' + req.url + '\n')
    }
    
    
    next();
}

module.exports = middlewareLog;