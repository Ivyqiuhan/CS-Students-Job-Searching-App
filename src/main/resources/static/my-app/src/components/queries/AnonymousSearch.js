import "./AnonymousSearch.css";
import React from "react";
import axios from 'axios';
import Dropdown from '../dropdown/Dropdown';

//testing
  const companyItems = [
    {
      id: 1,
      value: 'netflix'
    },
    {
      id: 2,
      value: 'lever'
    }
  ]


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
      companyValue: '',
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

  onChangeCompany = (newCompany) => {
    this.setState({
      companyValue : newCompany.value
    }, () => {console.log('new company', this.state.companyValue); });
  }

  handleSubmit = event => {
    event.preventDefault();
    
  //  indeed attempt #1 
  // axios.get('https://api.ipify.org?format=json')
  //   .then(res => {
  //     console.log(navigator.userAgent);

  //     // todo get user agent 

  //     const url = "https://api.indeed.com/ads/apisearch?publisher=unknown&q=" + this.state.technologyValue + "+" + this.state.positionValue + "&l=&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=&co"+ this.state.countryValue + "=&chnl=&userip=" + res.data.ip + "&useragent=&useragent=Mozilla/%2F4.0%28Firefox%29&v=2";
  //     axios.post(url)
  //       .then(res => {
  //         console.log(res);
  //         console.log(res.data);
  //       });
  //   });

// indeed attempt #2
  // const options = {
  //   method: 'GET',
  //   url: 'https://indeed-indeed.p.rapidapi.com/apigetjobs',
  //   params: {publisher: 'unknown', format: 'json', v: '2', jobkeys: this.state.technologyValue + ', ' + this.state.countryValue + ', ' + this.state.positionValue},
  //   headers: {'x-rapidapi-host': 'indeed-indeed.p.rapidapi.com'}
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

// lever attempt
  axios.get('https://api.lever.co/v0/postings/' + this.state.companyValue + '?skip=0&limit=25&mode=json')
    .then(res => {
      console.log("line 161");
      console.log(res.data);
      // axios.post('http://localhost:8080/jobs', res.data)
      //     .then(res => {
      //         console.log(res);
      //     }).catch(err => {
      //         console.log(err);
      // });
    });

}


render() {
    return (
    <div className="all-queries">
        <div className="dd-container">
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

            <div className="dd-container">
                <div className="container">
                    <Dropdown 
                    title="Company" 
                    items={companyItems} 
                    changeValue={this.onChangeCompany}/> 
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
