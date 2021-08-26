import React,  { Component }  from 'react';
import "./Register.css";
import axios from "axios";

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: "",
            email: "",
            phone: "",
            userLocation: "",
            password: "",
            password2: "",
            registrationErrors: ""
        };
    }

    // todo need to test with updated UserProfileConfig
    handleClick = event => {
        event.preventDefault();
        let data = {
            id: 0,
            email: this.state.email,
            name: this.state.name,
            phoneNumber: this.state.phone,
            location: this.state.userLocation,

            // stuff that will be added to new UserProfileConfig
            username: this.state.username,
            password: this.state.password
        }
        axios.post('http://localhost:8080/users', data)
            .catch(err => {
                console.log(err);
            });
    }

    onChangeName= (event) => {
        this.setState({
            name : event.target.value
        }, () => {
            console.log('new name', this.state.name);
        });
    }

    onChangeUsername= (event) => {
        this.setState({
            username : event.target.value
    }, () => {
            console.log('new username', this.state.username);
        });
    }
    onChangeEmail= (event) => {
        this.setState({
            email: event.target.value
    }, () => {
            console.log('new email', this.state.email);
        });
    }

    onChangePhoneNumber= (event) => {
        this.setState({
            phone: event.target.value
        }, () => {
            console.log('new phone number', this.state.phone);
        });
    }

    onChangeUserLocation= (event) => {
        this.setState({
            userLocation: event.target.value
        }, () => {
            console.log('new location', this.state.userLocation);
        });
    }

    onChangePassword= (event) => {
        this.setState({
            password: event.target.value
        }, () => {
            console.log('new phone number', this.state.password);
        });
    }

    onChangeConfirmPassword= (event) => {
        this.setState({
            password2: event.target.value
        }, () => {
            console.log('new password2', this.state.password2);
        });
    }


    render() {
        return(
            <div>
                <div className="register-text"> Register</div>
                <div className="register-container">
                <form>
                    <div className="form-container">
                        <label htmlFor="name"> First & Last Name: </label><br/>
                        <input
                            type="text"
                            name="name"
                            className="input-box"
                            onChange={this.onChangeName}
                        /><br/>
                        <label htmlFor="username"> Username: </label><br/>
                        <input
                            type="text"
                            name="username"
                            className="input-box"
                            onChange={this.onChangeUsername}
                        /><br/>

                        <label htmlFor="email"> Email: </label><br/>
                        <input
                            type="text"
                            name="email"
                            className="input-box"
                            onChange={this.onChangeEmail}
                        /><br/>
                        <label htmlFor="phone"> Phone Number: </label><br/>
                        <input
                            type="text"
                            name="phone"
                            className="input-box"
                            onChange={this.onChangePhoneNumber}
                        /><br/>
                        <label htmlFor="location"> Location: </label><br/>
                        <input
                            type="text"
                            name="location"
                            className="input-box"
                            onChange={this.onChangeUserLocation}
                        /><br/>

                        <label htmlFor="password"> Password: </label><br/>
                            <input
                            type="text"
                            name="password"
                            className="input-box"
                            onChange={this.onChangePassword}
                        /><br/>
                        <label htmlFor="password"> Confirm password: </label><br/>
                            <input
                            type="text"
                            name="password2"
                            className="input-box"
                            onChange={this.onChangeConfirmPassword}
                        /><br/>
                    </div>
                    
                    <div className="btn-container">
                       <button type="signup-button" className="signup-button" onClick={this.handleClick}>
                       <div className="register-arrow"></div>
                       </button>
                    </div>
                    
                </form>
            </div>
            </div>
            
        );
    }
}