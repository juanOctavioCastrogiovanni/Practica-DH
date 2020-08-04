module.exports = function sessionMiddleware (req,res,next) {
 if (req.query){
   req.session.color = req.query.color;
   next()
 } else {
    next()
 }
}