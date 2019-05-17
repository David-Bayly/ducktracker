import React, {Component} from 'react';
import FoodEntries from "./form-components/FoodEntries"
class Form extends Component{
  // constructor(props) {
  // 	super(props);
  // }
  submitForm(event){
  	console.log("Form Submitted!");
  	console.log(event.target.elements);
  }
  render(){
  	return(
  	<div>
  		<form onSubmit={event =>{
  			event.preventDefault();
  			if(this.props.submitForm!==undefined){
  				this.props.submitForm();
  			}else{
  				this.submitForm(event);
  			}
  			
  		}}>
	  		<div>
				<label htmlFor="feedtime">feedtime</label>
				<input type="time" id="feedtime" required/>
			</div>
			<FoodEntries/>
			<div>
				<label htmlFor="location">Location</label>
				<select id="location" name="location" required>
		            <option value="Portland">Portland</option>
		            <option value="Seattle">Seattle</option>
		  		    <option value="Vancouver">Vancouver</option>
					<option value="Victoria">Victoria</option>
				</select>
			</div>
			<div>
				<label htmlFor="quantity">quantity</label>
				<input type="number" id="quantity" min="1" required/>
			</div>
  			<button type="submit">Submit</button>
  		</form>
  	</div>
  	);
  }
}

 
export default Form;