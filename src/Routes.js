import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginContainer from './components/login/LoginContainer';
import PrincipalContainer from './components/principal/PrincipalContainer';

import Calendar from './components/calendar/Calendar';

const Routes = () => (
    <Switch>
        <Route exact path="/login" component={LoginContainer}/>
        <Route path="/agenda" component={PrincipalContainer}/>
        <Route path="/calendar" component={Calendar}/>
    </Switch>

);
export default Routes;
