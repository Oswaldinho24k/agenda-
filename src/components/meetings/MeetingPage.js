import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeesActions from '../../redux/actions/employeesActions';
import Loader from '../common/Loading'
import MeetingsComponents from './MeetingsComponents'
import NewMeetingContainer from './NewMeetingContainer';
import NewTask from './NewTask';
import NewProject from './NewProject';


class MeetingsPage extends Component{
  constructor(props) {
      super(props);
      this.state = {
          meeting: {
              name:'',
              meeting_date:'',
              participants:[],
          },
          openNewMeeting:true,
          emploList:[],
          employSelec:{},
          listAddEmp:true,
          openTask:false,
          openProject:false,
      };
  }
  openNewTask=()=>{
    let {openTask} = this.state;
    openTask = !openTask;
    this.setState({openTask})
  }
  openNewProject=()=>{
    let {openProject} = this.state;
    openProject = !openProject;
    this.setState({openProject})
  }
  closeNewMeeting=()=>{
    this.setState({openNewMeeting:false})
    this.props.history.push('/agenda/meeting')
  }
  addEmployes=(data)=>{
    let employSelec=this.state.employSelec;
    employSelec=data
    this.state.emploList.push(employSelec)
    this.setState(this.state)
    this.state
    console.log(this.state.emploList)
  }
  openListAdd = () => {
      let {listAddEmp} = this.state;
      listAddEmp = !listAddEmp;
      this.setState({listAddEmp})
  };
  addParticipants=()=>{
    let meeting=this.state.meeting;
    let data=this.state.emploList;
    meeting['participants']= data;
    console.log(this.state.meeting)
    this.openListAdd()
  }
  handleChange = (e) => {
      let meeting = this.state.meeting;
      meeting[e.target.name] = e.target.value;
      this.setState({meeting});
      console.log(meeting)
  };
  handleChangeDate = (e,date) => {
      let meeting= this.state.meeting;
      meeting['meeting_date'] = date;
      this.setState({meeting});
      console.log(meeting)
  };
  onSubmit=(e)=>{
      e.preventDefault();
      let newMeeting= this.state.meeting;
      //this.props.meetingActions.saveMeeting(newMeeting)
      this.setState({openNewMeeting:false})
  };
    render(){
          const {employees} = this.props;
        return(
                <div>
                  <NewMeetingContainer
                    open={this.state.openNewMeeting}
                    openClose={this.closeNewMeeting}
                    handleChange={this.handleChange}
                    handleChangeDate={this.handleChangeDate}
                    onSubmit={this.onSubmit}
                  />
                <NewTask
                  openTask={this.state.openTask}
                   openNewTask={this.openNewTask}
                  />
                 <NewProject
                    openProject={this.state.openProject}
                     openNewProject={this.openNewProject}
                    />
                   <MeetingsComponents
                     employessListAdd={this.state.emploList}
                     meeting={this.state.meeting}
                     listAddEmp={this.state.listAddEmp}
                     employees={employees}
                     addEmployes={this.addEmployes}
                     openListAdd={this.openListAdd}
                     addParticipants={this.addParticipants}
                     openNewProject={this.openNewProject}
                     openNewTask={this.openNewTask}
                  />
                </div>
        )
    }
}

function mapStateToProps(state, ownProps) {

    return {
      employees: state.employees.list
    }
}

function mapDispatchToProps(dispatch) {
    return{
        employeesActions:bindActionCreators(employeesActions,dispatch)
    }
}

MeetingsPage = connect(mapStateToProps, mapDispatchToProps)(MeetingsPage);
export default MeetingsPage;
