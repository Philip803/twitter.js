var express = require("express");
var app = express();
var morgan = require("morgan");
var routes = require("./routes");
var nunjucks = require("nunjucks");

app.use(morgan("combined")) //print log
app.use(morgan("dev"))  //print status

app.use(express.static(__dirname + "/public"));  //all static file to here, css js
app.use("/",routes); //all the route send to route fiel

// app.set("views", __dirname + "/views"); //where to find the views
app.set("view engine", "html"); //what file extension do our templates have
app.engine("html", nunjucks.render);
nunjucks.configure("view", {nocache : true});



app.listen(3000, () => console.log("Server running on port 3000!"))


