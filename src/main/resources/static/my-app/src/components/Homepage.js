import "./Homepage.css";
import React from "react";
import Dropdown from './dropdown/Dropdown';

//testing
const items = [
  {
    id: 1,
    value: 'One'
  },
  {
    id: 2,
    value: 'Two'
  },
  {
    id: 3,
    value: 'Three'
  }
]

const Home = () => {
  return (
    <div className="Homepage">
      Hello World

      <div className="container">
        <Dropdown title="Select..." items={items}/> 
      </div>
      
    </div>
  );
}

export default Home;
