module.exports = function cookieMiddleware (req,res,next) {
 if (req.query.recordar == 'yes'){
   res.cookie('elColor', req.session.color);
   next()
 } else {
    next()
 }
}