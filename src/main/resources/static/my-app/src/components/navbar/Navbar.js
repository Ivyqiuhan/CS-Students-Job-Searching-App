import React, { Component } from 'react'
import "./Navbar.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    state = { clicked: false }

    render() {
        return (
            <div>
                <nav className="NavbarItems">
                    <h1 className="navbar-home"><NavLink to="/">NAME</NavLink></h1>
                    
                    <div className="navbar-account-items">
                        <NavLink to="/login"><img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"/></NavLink>
                        <h1 className="navbar-account"><NavLink to="/login">ACCOUNT</NavLink></h1>
                    </div>
                    
            
                </nav>
            </div>
        )
    }
}

export default Navbar
