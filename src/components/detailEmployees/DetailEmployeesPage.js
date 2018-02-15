import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeesActions from '../../redux/actions/employeesActions';
import Loader from '../common/Loading'
import DetailComponents from './DetailEmployees'



class DetailEmployeesPage extends Component{


    render(){
        let {employee, fetched} = this.props;
        console.log(employee)
        if(!fetched)return(<Loader/>);
        return(
                <div>
                   <DetailComponents
                        {...employee}
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
    console.log(id)

    employee = employee[0];
    return {
        employee,
        fetched: employee!==undefined && state.employees.list!==undefined,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        employeesActions:bindActionCreators(employeesActions,dispatch)

    }
}

DetailEmployeesPage = connect(mapStateToProps, mapDispatchToProps)(DetailEmployeesPage);
export default DetailEmployeesPage;
