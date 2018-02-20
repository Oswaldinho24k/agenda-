import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeesActions from '../../redux/actions/employeesActions';
import * as meetingActions from '../../redux/actions/meetingActions';
import * as tasksActions from '../../redux/actions/tasksActions';
import Loader from '../common/Loading'
import MeetingsComponents from './MeetingsComponents'
import NewMeetingContainer from './NewMeetingContainer';
import NewProject from './NewProject';

class MeetingsPage extends Component{
  constructor(props) {
      super(props);
      this.state = {
          task: {},
          meeting:{},
          openNewMeeting:false,
          emploList:[],
          employSelec:{},
          listAddEmp:true,
          openProject:false,
          user:{},
          value:'',
      };
  }



  openNewProject=()=>{
    let {openProject} = this.state;
    openProject = !openProject;
    this.setState({openProject})
  }
  //Meeting
  closeNewMeeting=()=>{
    this.setState({openNewMeeting:false})
    this.props.history.push('/agenda/meeting')
  }

    handleChangeDate = (e,date) => {
        let meeting= this.state.meeting;
        meeting['meeting_date'] = date;
        this.setState({meeting});
        console.log(meeting)
    };


  //list User
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
    let data=this.props.emploList;
    meeting['participants']= data;
    console.log(this.state.meeting)
    this.openListAdd()
  }
//////////////////////////////////777

  //add new Task
  onSubmit=(e)=>{
      e.preventDefault();
      let newTask= this.state.task;
      newTask['meeting']=parseInt(this.props.match.params.id)
      this.props.tasksActions.saveTask(newTask);
      console.log(newTask)
      e.target.name.value="";
  };
  handleChange = (e) => {
      let task = this.state.task;
      task[e.target.name] = e.target.value;
      this.setState({task});
      console.log(task)
  };
  //Table TASK
  addPerson=(taskId, userId)=>{
     let newPerson= this.state.user;
     newPerson['id'] =parseInt(taskId)
     newPerson['user']=parseInt(userId)
    // console.log(newPerson)
    console.log(newPerson);
     this.props.tasksActions.editTask(newPerson);
  }
  onDelete=(i)=>{
   console.log("Voy a eliminar",i)
   this.props.tasksActions.deleteTask(i);
  };

  handleChangePerson = (event, index, value) => this.setState({value});


////////////////////////////////////////////
    render(){
          let {selectedRowKeys} = this.state;
          const {employees, meeting,fetched,tasks,id,} = this.props;
          console.log(tasks)
        if(!fetched)return<Loader/>
        return(
                <div>
                  <NewMeetingContainer
                    open={this.state.openNewMeeting}
                    openClose={this.closeNewMeeting}
                    handleChange={this.handleChange}
                    handleChangeDate={this.handleChangeDate}
                    onSubmit={this.onSubmit}
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
                     meeting={meeting}
                     tasks={tasks}
                     addEmployes={this.addEmployes}
                     openListAdd={this.openListAdd}
                     addParticipants={this.addParticipants}
                     openNewProject={this.openNewProject}
                     openNewTask={this.openNewTask}
                     onSubmit={this.onSubmit}
                     onChange={this.handleChange}
                     onDelete={this.onDelete}
                     addPerson={this.addPerson}
                     onChangePerson={this.handleChangePerson}
                     valuePerson={this.state.value}
                  />
                </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  let meeting= state.meeting.list.filter(a=>{
      return id == a.id;
  });
  let tasks = state.tasks.list.filter(b=>{
    return id == b.meeting.id;
  })

  console.log(id)
  meeting=meeting[0]
  tasks=tasks
    return {
      employees: state.employees.list,
      tasks,
      meeting,
      fetched:  meeting!==undefined && state.meeting.list!==undefined,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        employeesActions:bindActionCreators(employeesActions,dispatch),
        meetingActions:bindActionCreators(meetingActions,dispatch),
        tasksActions:bindActionCreators(tasksActions,dispatch),
    }
}

MeetingsPage = connect(mapStateToProps, mapDispatchToProps)(MeetingsPage);
export default MeetingsPage;
