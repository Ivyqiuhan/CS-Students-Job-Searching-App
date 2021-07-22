import React,  { Component }  from 'react';
import "./Register.css";

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            password2: "",
            registrationErrors: ""
        };
    }

    render() {
        return(
            <div className="register-container">
                <form>
                    <div className="form-container">
                        <label for="username"> Username: </label><br/>
                        <input
                            type="text"
                            name="username"
                        /><br/>

                        <label for="email"> Email: </label><br/>
                        <input
                            type="text"
                            name="email"
                        /><br/>

                        <label for="password"> Password: </label><br/>
                            <input
                            type="text"
                            name="password"
                        /><br/>
                        <label for="password"> Confirm password: </label><br/>
                            <input
                            type="text"
                            name="password2"
                        /><br/>
                    </div>
                    
                    <div className="btn-container">
                       <button type="signup-button" className="signup-button">Sign-up</button>  
                    </div>
                    
                </form>
            </div>
        );
    }
}