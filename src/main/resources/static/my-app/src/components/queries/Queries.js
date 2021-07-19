import "./Queries.css";
import React from "react";
import Dropdown from '../dropdown/Dropdown';

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

const handleClick = () => {

}
  
const Queries = () => {
    return (
    <div className="all-queries">
        <div className="all-queries-container">
            <div className="container">
                <Dropdown title="Location" items={items}/> 
            </div>
            <div className="dd-container">
                <div className="container">
                    <Dropdown title="Position" items={items}/> 
                </div>
            </div>

            <div className="dd-container">
                <div className="container">
                    <Dropdown title="Experience" items={items}/> 
                </div>
            </div>
            
        </div>

        <div className="button-container">
            <button onClick={handleClick} className="submit-button"> Submit</button>
        </div>
        
    </div>
    );
  }
  
export default Queries;