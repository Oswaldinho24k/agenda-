import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginContainer from './components/login/LoginContainer';
import TasksContainer from './components/tasks/TasksContainer';

const Routes = () => (
    <Switch>
        <Route path="/" component={LoginContainer}/>
        <Route path="/tasks" component={TasksContainer}/>
    </Switch>

);
export default Routes;
