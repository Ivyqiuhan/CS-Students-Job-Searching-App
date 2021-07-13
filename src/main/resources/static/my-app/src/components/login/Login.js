import React,  { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        };
    }

    render() {
        return(
            <div>
                <form>
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

                    <button type="login-button">Login</button> 
                    
                </form>

                <Link to="/register" className="register-btn">Register</Link>
            </div>
        );
    }
}