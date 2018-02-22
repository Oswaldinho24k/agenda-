import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TasksContainer from '../tasks/TasksContainer';
import PrincipalComponents from './PrincipalComponents';
import EmployeesContainer from '../employees/EmployeesContainer';
import DetailEmployees from '../detailEmployees/DetailEmployeesPage';
import MeetingPage from '../meetings/MeetingPage';
import TableMeetingContainer from '../tablemeeting/TableMeetingContainer'
import ProjectContainer from '../project/ProjectContainer';
import ProjectsDetailPage from '../projectdetail/ProjectsDetailPage'

const Pages = ({props}) => (
    <Switch>
        <Route exact path="/agenda" component={PrincipalComponents}/>
        <Route path="/agenda/tasks" component={TasksContainer}/>
        <Route path="/agenda/project" component={ProjectContainer}/>
        <Route path="/agenda/meeting/:id" component={MeetingPage}/>
        <Route path="/agenda/meeting" component={TableMeetingContainer}/>
        <Route path="/agenda/employees/:id" component={DetailEmployees}/>
        <Route path="/agenda/employees" component={EmployeesContainer}/>
    </Switch>

);
export default Pages;
