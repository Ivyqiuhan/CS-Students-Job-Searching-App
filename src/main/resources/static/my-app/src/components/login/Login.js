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
            <div>
                <div className="login-text"> Login</div>
                <div className="login-container">
                
                <form>
                <div className="form-container">
                    <label for="username"> Username: </label><br/>
                    <input
                        type="text"
                        name="username"
                        className="input-box"
                        onChange={this.onChangeUsername}
                    /><br/>

                    <label for="password"> Password: </label><br/>
                        <input
                        type="text"
                        name="password"
                        className="input-box"
                        onChange={this.onChangePassword}
                    /><br/>
                </div>

                <div className="btn-container">
                    <div className="register-btn-container">
                        <Link to="/register" className="register-button">Register</Link>
                        </div>

                        <div className="login-btn-container">
                            <button type="login-button" className="login-button" onClick={this.handleClick}>
                            <div className="right-arrow"></div></button> 
                        </div> 
                    </div>
                </form>
            </div>
            </div>
            
        );
    }
}