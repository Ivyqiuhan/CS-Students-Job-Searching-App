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

    render() {
        return(
            <div className="login-container">
                <form>
                <div className="form-container">
                    <label for="username"> Username: </label><br/>
                    <input
                        type="text"
                        name="username"
                    /><br/>

                    <label for="password"> Password: </label><br/>
                        <input
                        type="text"
                        name="password"
                    /><br/>
                </div>

                <div className="btn-container">
                    <div className="register-btn-container">
                        <Link to="/register" className="register-button">Register</Link>
                        </div>

                        <div className="login-btn-container">
                            <button type="login-button" className="login-button">Login</button> 
                        </div> 
                    </div>
                </form>
            </div>
        );
    }
}