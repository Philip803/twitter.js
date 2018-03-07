var express = require("express");
var app = express();
var morgan = require("morgan");
var routes = require("./routes");
var nunjucks = require("nunjucks");
var bodyParser = require("body-parser")

// app.use(morgan("combined")) //print log
app.use(morgan("dev"))  //print status

app.use(express.static(__dirname + "/public"));  //all static file to here, css js

app.use(bodyParser.urlencoded( {extended:true} )) //middleware call body-parser , for HTML form submits
app.use(bodyParser.json()); //would be for AJAX requests

app.use("/",routes); //all the route send to route fiel

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates



app.listen(3030, () => console.log("Server running on port 3000!"))
