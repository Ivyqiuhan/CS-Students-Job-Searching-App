import "./AnonymousSearch.css";
import React from "react";
import axios from 'axios';
import Dropdown from '../dropdown/Dropdown';

//testing
  const countryItems = [
    {
      id: 1,
      value: 'US'
    },
    {
      id: 2,
      value: 'Canada'
    },
    {
      id: 3,
      value: 'France'
    }
  ]

  const positionItems = [
    {
      id: 1,
      value: 'Developer'
    },
    {
      id: 2,
      value: 'Tester'
    },
    {
      id: 3,
      value: 'Data Analyst'
    }
  ]

  const technologyItems = [
    {
      id: 1,
      value: 'Java'
    },
    {
      id: 2,
      value: 'Python'
    },
    {
      id: 3,
      value: 'Cloud'
    }
  ]


class AnonymousSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countryValue: '',
      positionValue: '',
      technologyValue: '',
    };

    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeTechnology = this.onChangeTechnology.bind(this);

  }

  onChangePosition = (newPosition) => {
    this.setState({
      positionValue : newPosition.value
    }, () => {console.log('new state', this.state.positionValue); });
  }

  onChangeCountry = (newCountry) => {
    this.setState({
      countryValue : newCountry.value
    }, () => {console.log('new state', this.state.countryValue); });
  }

  onChangeTechnology = (newTechnology) => {
    this.setState({
      technologyValue : newTechnology.value
    }, () => {console.log('new state', this.state.technologyValue); });
  }

  handleSubmit = event => {
    event.preventDefault();
    
  // todo get IP address 

  const url = "https://api.indeed.com/ads/apisearch?publisher=123412341234123&q=" + this.state.technologyValue + "+" + this.state.positionValue + "&l=&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=&co"+ this.state.countryValue + "=&chnl=&userip=" + "1.2.3.4" + "&useragent=" + navigator.userAgent + "&v=2";

  axios.post(url)
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
}


render() {
    return (
    <div className="all-queries">
        <div className="all-queries-container">
            <div className="container">
                <Dropdown 
                  title="Country" 
                  items={countryItems}
                  changeValue={this.onChangeCountry}/> 
            </div>
            <div className="dd-container">
                <div className="container">
                    <Dropdown 
                      title="Position" 
                      items={positionItems} 
                      changeValue={this.onChangePosition}/> 
                </div>
            </div>

            <div className="dd-container">
                <div className="container">
                    <Dropdown 
                    title="Experience" 
                    items={technologyItems} 
                    changeValue={this.onChangeTechnology}/> 
                </div>
            </div>
        </div>

        <div className="button-container">
            <button onClick={this.handleSubmit} className="submit-button"> Submit</button>
        </div>
        
    </div>
    );
  }
}


export default AnonymousSearch
