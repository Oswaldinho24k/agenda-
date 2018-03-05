import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeesActions from '../../redux/actions/employeesActions';
import * as meetingActions from '../../redux/actions/meetingActions';
import * as tasksActions from '../../redux/actions/tasksActions';
import * as userActions from '../../redux/actions/userActions';
import Loader from '../common/Loading'
import MeetingsComponents from './MeetingsComponents';
import NewProject from './NewProject';
import './meetings.css';

class MeetingsPage extends Component{
  constructor(props) {
      super(props);
      this.state = {
          task: {},
          emploList:[],
          employSelec:{},
          listAddEmp:true,
          openProject:false,
          user:{},
          priority:{},
          date:{},
      };
  }



  openNewProject=()=>{
    let {openProject} = this.state;
    openProject = !openProject;
    this.setState({openProject})
  }

  //list User
  addEmployes=(data)=>{
    let employSelec=this.state.employSelec;
    employSelec=data
    this.state.emploList.push(employSelec)
    this.setState(this.state)
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

    this.props.tasksActions.editTask(newPerson);
  }
  addPriority=(taskId,value)=>{
    let priority= this.state.priority;
    priority['id'] =parseInt(taskId)
    priority['priority']=value

    this.props.tasksActions.editTask(priority);
  }
  onDelete=(i)=>{
   console.log("Voy a eliminar",i)
   this.props.tasksActions.deleteTask(i);
  };
  changeDateStart = (e,date) => {
      let dateS= this.state.date;
      dateS['starts'] = date;
      this.props.tasksActions.editTask(dateS)
      console.log(dateS)
  };
  changeDateFinish = (e,date) => {
      let dateS= this.state.date;
      dateS['expiry'] = date;
      this.props.tasksActions.editTask(dateS)
      console.log(dateS)
  };

  onDate=(taskId)=>{
    let dateS= this.state.date;
    dateS['id'] =parseInt(taskId)
    console.log("Voy a cambiar fecha",taskId)
  }



////////////////////////////////////////////
    render(){
          const {employees, meeting,fetched,tasks,user,} = this.props;
          console.log(user)
        if(!fetched)return<Loader/>
        return(
                <div>

                 <NewProject
                    openProject={this.state.openProject}
                     openNewProject={this.openNewProject}
                    />
                   <MeetingsComponents
                     employessListAdd={this.state.emploList}

                     listAddEmp={this.state.listAddEmp}
                     employees={employees}
                     meeting={meeting}
                     tasks={tasks}
                     {...user}
                     addEmployes={this.addEmployes}
                     openListAdd={this.openListAdd}
                     addParticipants={this.addParticipants}
                     openNewProject={this.openNewProject}
                     openNewTask={this.openNewTask}
                     onSubmit={this.onSubmit}
                     onChange={this.handleChange}
                     onDelete={this.onDelete}
                     addPerson={this.addPerson}
                     addPriority={this.addPriority}
                     changeDateStart={this.changeDateStart}
                     changeDateFinish={this.changeDateFinish}
                     onDate={this.onDate}
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
  //let tasks = state.tasks.list.filter(b=>{
      // return id == b.meeting.id;
  //})
  meeting=meeting[0]
  //tasks=tasks
    return {
      employees: state.employees.list,
      user: state.user.object,
      tasks: state.tasks.list,
      meeting,
      fetched:  meeting!==undefined && state.meeting.list!==undefined,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        userActions:bindActionCreators(userActions,dispatch),
        employeesActions:bindActionCreators(employeesActions,dispatch),
        meetingActions:bindActionCreators(meetingActions,dispatch),
        tasksActions:bindActionCreators(tasksActions,dispatch),
    }
}

MeetingsPage = connect(mapStateToProps, mapDispatchToProps)(MeetingsPage);
export default MeetingsPage;
