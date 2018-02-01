import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TasksContainer from '../tasks/TasksContainer';
import PrincipalComponents from './PrincipalComponents';
import EmployeesContainer from '../employees/EmployeesContainer';
import DetailEmployees from '../detailEmployees/DetailEmployeesPage';
import MeetingPage from '../meetings/MeetingPage';

const Pages = ({props}) => (
    <Switch>
        <Route exact path="/agenda" component={PrincipalComponents}/>
        <Route path="/agenda/tasks" component={TasksContainer}/>
        <Route path="/agenda/meetings" component={MeetingPage}/>

        <Route path="/agenda/employees/:id" component={DetailEmployees}/>
        <Route path="/agenda/employees" component={EmployeesContainer}/>
    </Switch>

);
export default Pages;
