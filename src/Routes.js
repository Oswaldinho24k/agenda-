import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import LoginContainer from './components/login/LoginContainer';
import PrincipalContainer from './components/principal/PrincipalContainer';
import SingupContainer from './components/login/SingupContainer';
import InfoContainer from './components/login/InfoContainer';


const Routes = () => (
    <Switch>
        <Route exact path="/login" component={LoginContainer}/>
        <Route  path="/singup" component={SingupContainer}/>
        <Route path="/info" component={InfoContainer}/>
        <Route path="/agenda" component={PrincipalContainer}/>
        <Redirect from="/" exact to="/agenda/" />

    </Switch>

);
export default Routes;
