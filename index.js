const express = require("express");
const path = require("path");
let app = express();
const bodyParser = require("body-parser");
//Setting up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Setting up ejs as the view engine. 
app.set("view engine", "ejs");
app.set("views", "views");


app.get("/",function(req,res){
	res.render("pages/index")
});

app.post("/",function(req,res){
	console.log(req.body);
	res.send("Post recieved");
});
app.listen(process.env.PORT||1337);