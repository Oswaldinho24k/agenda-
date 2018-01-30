import React,{Component}from 'react';
import EmployeesComponents from './EmployeesComponents';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import * as employeesActions from '../../redux/actions/employeesActions';


class EmployeesContainer extends Component{
  render(){
    const {employees} = this.props;
    console.log(employees)
    return(
            <EmployeesComponents
              employees={employees}
            />

    );
  }
}



function mapStateToProps(state, ownProps) {

    return {
       employees: state.employees.list
    }

}

function mapDispatchToProps(dispatch){
  return{
    employeesActions:bindActionCreators(employeesActions,dispatch)
  }
}

EmployeesContainer = connect (mapStateToProps,mapDispatchToProps)(EmployeesContainer);
export default EmployeesContainer;
