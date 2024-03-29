import React, {Component} from 'react';
import FoodEntries from "./form-components/FoodEntries"
import './Form.css';
class Form extends Component{
  constructor(props) {
  	super(props);
  	this.state={
  		time:"",
  		foodEntries:[],
  		location:"",
  		quantity:1, 
  		repeatDaily:"off",
      message:"Please enter your data"
  	}
  	this.changeTime=this.changeTime.bind(this);
  	this.changeFoodEntries=this.changeFoodEntries.bind(this);
  	this.changeLocation=this.changeLocation.bind(this);
  	this.changeQuantity=this.changeQuantity.bind(this);
  	this.changeRepeat=this.changeRepeat.bind(this);
    this.submitForm=this.submitForm.bind(this);
  }
  changeTime(event){
  	this.setState({time:event.target.value});
  }
  changeFoodEntries(value){
  	this.setState({foodEntries:value});
  }
  changeLocation(event){
  	this.setState({location:event.target.value});
  }
  changeQuantity(event){
  	this.setState({quantity:event.target.value});
  }
  changeRepeat(event){
  	this.setState({repeatDaily:event.target.value});
  }
  submitForm(event){
    const self = this;
  	fetch("/api/save",{
  		method:"POST",
  		headers:{ 
  			'Content-Type':'application/json'
  		},
  		body:JSON.stringify({
  			time:this.state.time,
  			foodEntries:this.state.foodEntries,
  			location:this.state.location,
  			quantity:this.state.quantity,
  			repeat:this.state.repeatDaily
  		})
  	}).then(res=>res.json().then(function(message){
      self.setState({message:message.message})
    }));

  }
  render(){
    let message=[];
      message.push(
        <h3 key = "1">{this.state.message}</h3>
      )
  	return(
  	<div className="inner">
        <div>
            {message}
            </div>
        		<form onSubmit={event=>{
        			event.preventDefault();
        			if(this.props.submitForm!==undefined){
        				this.props.submitForm();
        			}else{
        				this.submitForm(event);
        			}
        			
        		}}>
	  		<div>
				<label htmlFor="feedtime">feedtime</label>
				<input type="time" id="feedtime" onChange={this.changeTime} required/>
			</div>
			<FoodEntries foodEntries={this.state.foodEntries} changeFoodEntries={this.changeFoodEntries}/>
			<div>
				<label htmlFor="location">Location</label>
				<select id="location" name="location" onChange={this.changeLocation} required>
		            <option value=''></option>
		            <option value="Portland">Portland</option>
		            <option value="Seattle">Seattle</option>
		  		    <option value="Vancouver">Vancouver</option>
					<option value="Victoria">Victoria</option>
				</select>
			</div>
			<div>
				<label htmlFor="quantity">quantity</label>
				<input type="number" id="quantity" min="1" onChange={this.changeQuantity} required/>
			</div>
			<div>
			<label htmlFor="repeat">Repeat Daily?</label>
			  <input type="checkbox" id="repeat" name="repeat" onChange={this.changeRepeat}/>
  			</div>
  			<button className="btn btn-primary" type="submit">Submit</button>
  		</form>
  	</div>
  	);
  }
}

 
export default Form;