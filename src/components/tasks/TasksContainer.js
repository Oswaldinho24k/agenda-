import React,{Component}from 'react';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import TasksComponents from './TasksComponents';
import * as userActions from '../../redux/actions/userActions';



class TasksContainer extends Component{
  componentWillMount(){
  const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
  console.log(userToken)
  if(!userToken){
    this.props.history.push('/login')
}
}
  render(){
    return(
      <div className="padre">
        <TasksComponents/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
    return {
       user: state.user.object
    }
}

function mapDispatchToProps(dispatch){
  return{
    userActions:bindActionCreators(userActions,dispatch)
  }
}

TasksContainer = connect (mapStateToProps,mapDispatchToProps)(TasksContainer);
export default TasksContainer;
