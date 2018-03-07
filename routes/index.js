var routes = require("express").Router();

var people = [
  {
    name : "sing",
    age : 15
  }, {
    name : "peter",
    age : 55
  }
]

routes.get("/", (req, res) => {
  res.render("index", {title : "Hello", people})
});

routes.get("/about", (req, res) => {
  res.send("About Page");
})

module.exports = routes;  //routes instance
