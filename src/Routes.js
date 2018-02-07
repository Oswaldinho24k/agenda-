import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginContainer from './components/login/LoginContainer';
import PrincipalContainer from './components/principal/PrincipalContainer';
<<<<<<< HEAD
import Calendar from './components/calendar/Calendar';
=======
import CalendarioContainer from './components/calendario/CalendarioContainer';
>>>>>>> 33ec1c2e1710dda9364a6c942538a2324c3c6018

const Routes = () => (
    <Switch>
        <Route exact path="/login" component={LoginContainer}/>
        <Route path="/agenda" component={PrincipalContainer}/>
<<<<<<< HEAD
        <Route path="/calendar" component={Calendar}/>
=======
        <Route path="/calendario" component={CalendarioContainer} />
>>>>>>> 33ec1c2e1710dda9364a6c942538a2324c3c6018
    </Switch>

);
export default Routes;
