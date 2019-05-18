const validate =require("validate.js")
function validateEntry(body){
	let messages = [];
	let constraints = {
		time:{
			presence:true,
			format:{
				pattern:/^([0-1][0-9]:[0-5][0-9])|(2[0-3]:[0-5][0-9])$/
			}
		},
		foodEntries:{
			presence:true,
		},
		quantity:{
			presence:true,
			format:{
				pattern:/^[0-9]{1,6}$/
			}
		},
		location:{
			presence:true,
			format:{
				pattern:/[A-Za-z]{1,99}/
			}
		},
		repeat:{
			presence:true,
			format:{
				pattern:/(on|off)/
			}
		}

	}

	let results = validate(body,constraints);
	if(results==undefined){
		return true;
	}else{
		let messages ="";
		for(let x in results){
			messages += results[x]+"\n";
		}
		return messages;
	}

}
module.exports={validateEntry};
