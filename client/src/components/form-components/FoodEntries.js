import React, {Component} from 'react';
import FoodEntry from "./FoodEntry"
class FoodEntries extends Component{
  constructor(props) {
  	super(props);
    this.state={entries:[],foodtype:""};
  }
  addFoodEntry(event){
    let entries = this.state.entries;
    console.log(event);
    entries.push("");
    this.setState({entries:entries});
  }
  selectType(event){
    this.setState({});
  }
  render(){
    let elements = [];
    for(let x in this.state.entries){
      elements.push(
          <FoodEntry key = {x} keyvalue={x} type={this.state.entries[x]}/>
        )
    }
  	return(
  	<div className="foodentries">
      <label htmlFor="foodtype">Food Type</label>
        <select id="foodtype" name="foodtype" default="" required>
          <option value="birdseed">Bird Seed</option>
          <option value="breadcrumbs">Bread Crumbs</option>
          <option value="grains">Grains</option>
          <option value="corn">Corn</option>
        </select>
        <button type="button" onClick={event=>{this.addFoodEntry(event)}}>Add Food Entry</button>
        {elements}
  	</div>
  	);
  }
}
export default FoodEntries;