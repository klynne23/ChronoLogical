module.exports = function(req, res, next) {
  if (req.user) {
    return next();
  }

  // this route will redirect to the route that will display our signup page
  
  return res.redirect("/index");
};
