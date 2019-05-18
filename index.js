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


app.get("/api/ducks",function(req,res){
	console.log("ducks");
	res.send("TBA");
});
app.get("/api/food",function(req,res){
	console.log("food");
	res.send("TBA");
});

app.post("/api/save",function(req,res){
	console.log(req.body);
	res.send("Post recieved");
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})



app.listen(process.env.PORT||5000);