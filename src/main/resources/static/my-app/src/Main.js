import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
import Home from './components/Homepage';
import Profile from './components/Profile';
import Login from './components/login/Login';
import Register from './components/register/Register'

const Main = () => {
    return (      
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
    );
}
 
export default Main;