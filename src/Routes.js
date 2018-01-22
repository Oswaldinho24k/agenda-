import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginContainer from './components/login/LoginContainer';
import PrincipalContainer from './components/principal/PrincipalContainer';

const Routes = () => (
    <Switch>
        <Route exact path="/login" component={LoginContainer}/>
        <Route path="/agenda" component={PrincipalContainer}/>
    </Switch>

);
export default Routes;
