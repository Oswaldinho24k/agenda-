import React from 'react';
import {Route, Switch} from 'react-router-dom';
import  LoginContainer from './components/login/LoginContainer';

const Routes = () => (
    <Switch>
        <Route path="/" component={LoginContainer}/>
    </Switch>

);
export default Routes;