import "./Search.css";
import React from "react";
import axios from 'axios';
import Dropdown from '../dropdown/Dropdown';
import Jobs from "../jobs/Jobs";

//testing

const companyItems = [
    {id: 0, value: 'netflix'},
    {id: 1, value: 'lever'},
   // {id: 2, value: 'Ciena'} // todo delete after testing filter
]

const leverLocationItems = [
    {id: 0, value: 'Remote'},
    {id: 1, value: 'Flexible'},
    // {id: 2, value: 'Chicago'},
    {id: 3, value: 'Los Angeles'},
    // {id: 4, value: 'San Francisco'},
    {id: 5, value: 'Toronto'}
]

const netflixLocationItems = [
    {id: 0, value: 'Remote, United States'},
    // {id: 1, value: 'Alphaville, Brazil'},
    {id: 2, value: 'Amsterdam, Netherlands'},
    // {id: 3, value: 'Bangkok, Thailand'},
    // {id: 4, value: 'Berlin, Germany'},
    // {id: 5, value: 'Bogota, Columbia'},
    // {id: 6, value: 'Buenos Aires, Argentina'},
    // {id: 7, value: 'Copenhagen, Denmark'},
    // {id: 8, value: 'Istanbul, Turkey'},
    {id: 9, value: 'London, United Kingdom'},
    {id: 10, value: 'Los Angeles, California'},
    {id: 11, value: 'Los Gatos, California'},
    // {id: 12, value: 'Madrid, Spain'},
    // {id: 13, value: 'Manila, Philippines'},
    {id: 14, value: 'Mexico City, Mexico'},
    {id: 15, value: 'Mumbai, India'},
    // {id: 16, value: 'New York, New York'},
    // {id: 18, value: 'Oregon'},
    // {id: 19, value: 'Paris, France'},
    // {id: 20, value: 'Rio de Janeiro'},
    // {id: 21, value: 'Salt Lake City, Utah'},
    {id: 22, value: 'Seoul, South Korea'},
    {id: 23, value: 'Singapore, Singapore'},
    // {id: 24, value: 'Stockholm, Sweden'},
    // {id: 25, value: 'Sydney, Australia'},
    {id: 26, value: 'Tokyo, Japan'},
    // {id: 27, value: 'Toronto, Canada'}
]

class AnonymousSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            locationValue: '',
            companyValue: '',
            viewQueries: false,
            companySelected: false
        };

        this.onChangeLocation = this.onChangeLocation.bind(this);
    }

    onChangeLocation = (newLocation) => {
        this.setState({
            locationValue: newLocation.value
        }, () => {
            console.log('new state', this.state.locationValue);
        });
    }

    onChangeCompany = (newCompany) => {
        this.setState({
            companyValue: newCompany.value
        }, () => {
            console.log('new company', this.state.companyValue);
        });

        this.setState({
            companySelected: true
        }, () => {
            console.log('new company', this.state.companySelected);
        });
    }

    makeLeverAPIRequest = (jobArray) => {
        for (let job of jobArray) {
            let data = {
                jobKey: 0,
                source: 'lever',
                sourceID: null,
                postDescription: job.additionalPlain,
                jobTitle: job.text,
                company: this.state.companyValue,
                url: job.applyUrl,
                expired: null,

                //todo add these to JobConfig and test to make sure they're being sent
                commitment: job.categories.commitment,
                location: job.categories.location
            }
            axios.post('http://localhost:8080/jobs', data)
                .catch(err => {
                    console.log(err);
                });
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.get('https://api.lever.co/v0/postings/' + this.state.companyValue + '?skip=0&limit=50&mode=json&location=' +
            this.state.locationValue
        )
            .then(res => {
                console.log(res.data);
                this.makeLeverAPIRequest(res.data);
            })
            .then(() => {
                axios.get('http://localhost:8080/jobs')
                    .then((response) => {
                        this.setState({allJobs: response.data}, () => {
                            console.log('new jobs', this.state.allJobs);
                            this.setState({viewQueries: true}, () => {
                                console.log('setting viewQueries as true', this.state.viewQueries);
                            });
                        });
                    }).catch(error => console.error('Getting jobs error'));
            });
    }

    render() {
        return (
            <div className="anon-search-container">
                {(this.state.viewQueries) ?
                    <div className="jobs-search"><Jobs
                        jobs = {this.state.allJobs}
                        companyFilter = {this.state.companyValue}
                        locationFilter = {this.state.locationValue}
                        commitmentFilter = ''
                    /></div> :
                    <div className="search-text">Search for jobs</div>}

                <div className="all-queries">
                    <div className="dd-container">
                        <div className="container">
                            <Dropdown
                                title="Company"
                                items={companyItems}
                                changeValue={this.onChangeCompany}/>
                        </div>
                    </div>
                    <div className="dd-container">
                        <div className="container">
                            <Dropdown
                                title="Location"
                                items= {(this.state.companyValue === 'netflix') ? netflixLocationItems :
                                    (this.state.companyValue === 'lever') ? leverLocationItems :
                                        [{id: 0, value: 'Select a company first'}]}
                                changeValue={this.onChangeLocation}/>
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