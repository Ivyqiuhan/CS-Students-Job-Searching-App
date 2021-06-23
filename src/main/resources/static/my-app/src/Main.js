import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
import Home from './components/Homepage';
import Profile from './components/Profile';

const Main = () => {
    return (      
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
        </Switch>
    );
}
 
export default Main;