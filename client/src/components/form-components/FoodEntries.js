import React, {Component} from 'react';
import FoodEntry from "./FoodEntry"
class FoodEntries extends Component{
  constructor(props) {
  	super(props);
    this.state={
      foodtype:"",
    };
    this.addFoodEntry = this.addFoodEntry.bind(this);
    this.selectType = this.selectType.bind(this);
    this.removeFoodEntry = this.removeFoodEntry.bind(this);
  }
  addFoodEntry(event){
    let entries = this.props.foodEntries;
    console.log(entries);
    if(this.state.foodtype!==""&&this.state.foodtype!==null){
      entries.push([this.state.foodtype,1]);
      this.props.changeFoodEntries(entries);
    }
  }
  removeFoodEntry(id){
    let entries = this.props.foodEntries;
    entries.splice(id,1);
    this.props.changeFoodEntries(entries);
  }
  selectType(event){
    console.log(event.target.value);
    this.setState({foodtype:event.target.value});
  }
  render(){
    let elements = [];
    for(let x in this.props.foodEntries){
      elements.push(
          <FoodEntry key = {x} keyvalue={x} type={this.state.foodtype} remove = {this.removeFoodEntry} entries={this.props.foodEntries} update = {this.props.changeFoodEntries}/>
        )
    }
  	return(
  	<div className="foodentries">
      <label htmlFor="foodtype">Food Type</label>
        <select id="foodtype" name="foodtype" onChange={this.selectType} value={this.state.foodtype||""} default="" required>
          <option value=''></option>
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