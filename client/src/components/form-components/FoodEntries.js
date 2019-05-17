import React, {Component} from 'react';
import FoodEntry from "./FoodEntry"
class FoodEntries extends Component{
  // constructor(props) {
  // 	super(props);
  // }
  addFoodEntry(){

  }
  render(){
  	return(
  	<div>
      <span>Add a Food Entry</span>
      <input type="text"/>
      <FoodEntry/>
  	</div>
  	);
  }
}
export default FoodEntries;