import React,  { Component }  from 'react';

export default class Register extends Component {
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

                    <button type="signup-button">Sign-up</button> 
                    
                </form>
            </div>
        );
    }
}