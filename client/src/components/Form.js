import React, {Component} from 'react';

class Form extends Component{
  constructor(props) {
  	super(props);
  }
  // submitForm(){
  // 	console.log("Form Submitted!");
  // }
  render(){
  	return(
  	<div>
  		<form onSubmit={event =>{
  			event.preventDefault();
  			this.props.submitForm();
  		}}>
  			<button type="submit">Submit</button>
  		</form>
  	</div>
  	);
  }
}

 
export default Form;