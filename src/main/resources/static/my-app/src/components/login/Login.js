import React,  { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        };
    }

    handleClick(event) {
        //axios stuff i think....
        console.log("handling Click");
    }

    onChangeUsername= (event) => {
        this.setState({
            username: event.target.value
        }, () => {
            console.log('new username', this.state.username);
        });
    }

    onChangePassword= (event) => {
        this.setState({
            password: event.target.value
        }, () => {
            console.log('new password', this.state.password);
        });
    }

    render() {
        return(
            <div className="login-container">
                <form>
                <div className="form-container">
                    <label for="username"> Username: </label><br/>
                    <input
                        type="text"
                        name="username"
                        onChange={this.onChangeUsername}
                    /><br/>

                    <label for="password"> Password: </label><br/>
                        <input
                        type="text"
                        name="password"
                        onChange={this.onChangePassword}
                    /><br/>
                </div>

                <div className="btn-container">
                    <div className="register-btn-container">
                        <Link to="/register" className="register-button">Register</Link>
                        </div>

                        <div className="login-btn-container">
                            <button type="login-button" className="login-button" onClick={this.handleClick}>Login</button> 
                        </div> 
                    </div>
                </form>
            </div>
        );
    }
}