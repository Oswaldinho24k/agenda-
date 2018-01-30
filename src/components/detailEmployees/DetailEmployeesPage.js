import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeesActions from '../../redux/actions/employeesActions';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Loader from '../common/Loading'
import DetailComponents from './DetailEmployees0'

//jose Style
import Avatar from 'material-ui/Avatar';


class DetailEmployeesPage extends Component{


    render(){
        let {employee, fetched} = this.props;
        console.log(employee)
        if(!fetched)return(<Loader/>);
        return(
          <Card className="cardDetail">
            <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Avatar size={125} src={employee.avatar}/>
                <div style={{ justifyContent:'space-around', width:'80%', marginLeft:10}}>
                   <DetailComponents
                        {...employee}
                  />
                </div>

            </div>


          </Card>
        )
    }
}

function mapStateToProps(state, ownProps) {
    let id = ownProps.match.params.id;
    let employee= state.employees.list.filter(a=>{
        return id == a.id;
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

// <CardTitle title="Detail" />
//   <DetailComponents
//       {...employee}
//   />
