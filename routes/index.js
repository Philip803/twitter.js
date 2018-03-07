var routes = require("express").Router();
var tweetBank = require("../tweetBank")

routes.get("/", (req, res) => {
  let tweets = tweetBank.list();
  res.render("index", { tweets : tweets, showForm: true });
});

routes.get("/tweets/:id", (req,res) => {
  let id = req.params.id;
  let tweets = tweetBank.find({id:+id});
  res.render("index", {tweets : tweets  });
})

//cant be same URI since tweets already been taken
routes.get("/user/:name" , (req,res) => {
  let name = req.params.name;
  let tweets = tweetBank.find( {name: name} );
  res.render("index" , {tweets:tweets , showForm: true , username : name}); //pass username to html file
})

routes.post("/tweets" , (req,res, next) => {  //tweets action from html files
  tweetBank.add(req.body.name , req.body.text); //name in input form
  res.redirect("/");  //redirect to home page
})

module.exports = routes;  //routes instance
