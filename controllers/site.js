var site = {};

site.index = function(req, res, next) {
  res.render('index');
  console.log("site index");
}
module.exports = site;