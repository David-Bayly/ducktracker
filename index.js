const express = require("express");
const path = require("path");
let app = express();
const bodyParser = require("body-parser");
let validator=require("./validator.js");
let knex = require("./db/knex.js");
let moment =require("moment") 
//Setting up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client/build')));
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
	//console.log(req.body);
	let date =moment().format('YYYY-MM-DD');
	console.log(date);
	let valid = validator.validateEntry(req.body);
	if(valid===true){

		knex("feedingrecords").insert({
			Date:date,
			time:req.body.time,
			Location:req.body.location,
			"Number of Ducks":req.body.quantity,
			Repeat:req.body.repeat
		},'id').then(function(res){
			console.log(res);
			let foodentries = [];
			for(let x in req.body.foodEntries){
				foodentries.push({
					"feeding record":res[0],
					Type:req.body.foodEntries[0],
					Quantity:req.body.foodEntries[1]
				})	

			}
			knex("feedentries").insert(foodentries).then(function(result){
				console.log(result);
			})
		})
		res.send("Thank you for your submission!")
	}else{
		res.send(valid);
	}

});
