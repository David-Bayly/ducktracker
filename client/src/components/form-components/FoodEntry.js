import React, {Component} from 'react';

class FoodEntry extends Component{
  // constructor(props) {
  // 	super(props);
  // }
  submitForm(event){
  	console.log("Form Submitted!");
  }
  render(){
  	return(
  	<div>
      <span>Food Entry!</span>
  	</div>
  	);
  }
}

 
export default FoodEntry;