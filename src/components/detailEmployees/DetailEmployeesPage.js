import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeesActions from '../../redux/actions/employeesActions';
import * as tasksActions from '../../redux/actions/tasksActions';
import Loader from '../common/Loading'
import DetailComponents from './DetailEmployees'



class DetailEmployeesPage extends Component{


    render(){
        let {employee, fetched,tasks} = this.props;
        console.log(employee)
        if(!fetched)return(<Loader/>);
        return(
                <div>
                   <DetailComponents
                        {...employee}
                        tasks={tasks}
                  />
                </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    let id = ownProps.match.params.id;
    let employee= state.employees.list.filter(a=>{
        return id == a.user.id;
    });

    let tasks = state.tasks.list.filter(b=>{
      if ( !isNaN(b.user)) {
        return false;

      } else {
        return id == b.user.id
      }
    })
    console.log(tasks)

    employee = employee[0];
    tasks=tasks;

    return {
        employee,
        tasks,
        fetched: employee!==undefined && state.employees.list!==undefined,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        employeesActions:bindActionCreators(employeesActions,dispatch),
        tasksActions:bindActionCreators(tasksActions,dispatch),

    }
}

DetailEmployeesPage = connect(mapStateToProps, mapDispatchToProps)(DetailEmployeesPage);
export default DetailEmployeesPage;
