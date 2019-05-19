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
					Type:req.body.foodEntries[x][0],
					Quantity:req.body.foodEntries[x][1]
				})	

			}
			knex("feedentries").insert(foodentries).then(function(result){
				console.log(result);
			})
		})
		res.json({message:"Thank you for your submission!"});
	}else{
		res.json({message:valid});
	}

});


app.get("/api/data",function(req,res){
	let data = [];
	knex("feedingrecords").select().then(function(logs){
		knex("feedentries").select().then(function(entries){
			for(let x in logs){
				logs[x].entries =[];
				for(let y in entries){
					if(logs[x].id===entries[y]["feeding record"]){
						logs[x].entries.push(entries[y]);
					}
				}
				data.push(logs[x]);
			}
			res.send(data);
		})
	})

})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
setInterval(function(){
	knex("feedingrecords").select().then(function(logs){
		knex("feedentries").select().then(function(entries){
			let data = [];
			for(let x in logs){
				logs[x].entries =[];
				if(logs[x].Repeat==="on"){
					for(let y in entries){
						if(logs[x].id===entries[y]["feeding record"]){
							logs[x].entries.push(entries[y]);
						}
					}
					data.push(logs[x]);
				}
			}
			for(let x in data){
				addRecurring(data[x]);
			}
			console.log(data);
		})
	})
},8640000);
function addRecurring(log){
	log.Repeat="off";
	log.Date=moment().format('YYYY-MM-DD');
	let entries = log.entries;
	delete log.entries;
	delete log.id;
	knex("feedingrecords").insert(log,"id").then(function(id){
		for(let x in entries){
			entries[x]["feeding record"]=id;
		}
		console.log(entries);
		knex("feedentries").insert(entries).then(function(results){
			console.log(results);
		})
	});

 }

app.listen(process.env.PORT||5000);
console.log("Running");