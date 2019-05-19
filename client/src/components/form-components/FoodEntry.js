 import React, {Component} from 'react';

class FoodEntry extends Component{
  constructor(props) {
  	super(props);
    this.dismiss=this.dismiss.bind(this);
    this.update=this.update.bind(this);
  }
  dismiss(event){
    this.props.remove(this.props.keyvalue);  
  }
  update(event){
    let entries = this.props.entries;
    entries[this.props.keyvalue][1]=event.target.value;
    this.props.update(entries);
  }
  render(){
  	return(
  	<div className="foodentry">
      <span>
        {this.props.entries[this.props.keyvalue][0]}<br/>
        <input type="number" onChange={this.update} min="1" value={this.props.entries[this.props.keyvalue][1]}/>
        Kgs<button type="button" onClick={this.dismiss}>X</button>
      </span>
  	</div>
  	);
  }
}

 
export default FoodEntry;