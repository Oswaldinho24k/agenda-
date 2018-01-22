import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TasksContainer from '../tasks/TasksContainer';
import PrincipalComponents from './PrincipalComponents';

const Pages = () => (
    <Switch>
        <Route exact path="/agenda/" component={PrincipalComponents}/>
        <Route path="/agenda/tasks" component={TasksContainer}/>
    </Switch>

);
export default Pages;
