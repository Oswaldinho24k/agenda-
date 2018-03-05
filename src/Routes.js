import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import LoginContainer from './components/login/LoginContainer';
import PrincipalContainer from './components/principal/PrincipalContainer';

const Routes = () => (
    <Switch>
        <Route exact path="/login" component={LoginContainer}/>
        <Route path="/agenda" component={PrincipalContainer}/>
        <Redirect from="/" exact to="/agenda/" />

    </Switch>

);
export default Routes;
