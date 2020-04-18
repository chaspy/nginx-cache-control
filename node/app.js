var express = require("express");
var app = express();

var server = app.listen(3000, function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.use(function (req, res, next) {
  res.setHeader("Cache-Control", ["private", "max-age=60"].join(','));
	next();
});

app.set('view engine', 'ejs');

app.get("/", function(req, res, next){
  res.render("index", {});
});
