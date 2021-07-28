import "./AnonymousSearch.css";
import React from "react";
import axios from 'axios';
import Dropdown from '../dropdown/Dropdown';
import Jobs from "../jobs/Jobs";

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
      viewQueries: false
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

    makeLeverRequest = (jobArray) => {
        for (let job of jobArray) {
            let data = {
                jobKey: 0,
                source: 'lever',
                sourceID: null,
                postDescription: job.additionalPlain,
                jobTitle: job.text,
                company: this.state.companyValue,
                url: job.applyUrl,
                expired: null
            }
            axios.post('http://localhost:8080/jobs', data)
                .catch(err => {
                console.log(err);
            });
        }
    }

  handleSubmit = event => {
    event.preventDefault();

// lever attempt
  axios.get('https://api.lever.co/v0/postings/' + this.state.companyValue + '?skip=0&limit=25&mode=json')
    .then(res => {
      console.log(res.data);
        this.makeLeverRequest(res.data);
    });

    this.setState({ viewQueries: true});
}


render() {
    return (
      <div className="anon-search-container">
        {(this.state.viewQueries) ? 
          <div className="jobs-search"> <Jobs/> </div>: 
          <div className="search-text">Search for jobs</div>}
        
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
    </div>

    );
  }
}


export default AnonymousSearch
