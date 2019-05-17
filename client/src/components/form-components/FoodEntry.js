 import React, {Component} from 'react';

class FoodEntry extends Component{
  constructor(props) {
  	super(props);
    this.dismiss=this.dismiss.bind(this);
  }
  dismiss(event){
    this.props.remove(this.props.keyvalue);  
  }
  render(){
  	return(
  	<div className="foodentry">
      <span>
        {this.props.keyvalue}:{this.props.type}
        <button type="button" onClick={this.dismiss}>X</button>
      </span>
  	</div>
  	);
  }
}

 
export default FoodEntry;