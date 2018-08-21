import React, { Component } from 'react';
import FoodItemRow from './FoodItemRow.js';
import './App.css';
import './Images/magnifier.png';

class FoodTable extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.foodItems);
  }
  
  render() {
    return (
    <div>
      {this.props.foodItems.map((item)=>  <FoodItemRow name={item.name}/>)}
    </div>
    );
  }
}

export default FoodTable;