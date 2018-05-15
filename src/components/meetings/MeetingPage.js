import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeesActions from '../../redux/actions/employeesActions';
import * as meetingActions from '../../redux/actions/meetingActions';
import * as tasksActions from '../../redux/actions/tasksActions';
import * as userActions from '../../redux/actions/userActions';
import * as fileActions from '../../redux/actions/fileActions';
import * as orderActions from '../../redux/actions/orderActions';
import * as notesActions from '../../redux/actions/notesActions';
import * as immediateActions from '../../redux/actions/immediateActions';
import Loader from '../common/Loading';
import AddParticipants from './AddParticipants';
import TabsComponents from './TabsComponents';
import Accordion from './Accordion';
import './meetings.css';

class MeetingsPage extends Component{
  constructor(props) {
      super(props);
      this.state = {
          task: {},
          files:{},
          newAction:{},
          emploList:[],
          employSelec:{},
          listAddEmp:true,
          openProject:false,
          openParticipant:false,
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
  openParticipant=()=>{
    let {openParticipant} = this.state;
    openParticipant = !openParticipant;
    this.setState({openParticipant})
  }
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
    let data=this.state.emploList;
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
///////////////////////////////////////////////
//new File
  onSubmitFile=(e)=>{
      e.preventDefault();
      let newFile= this.state.files;
      newFile['meeting']=parseInt(this.props.match.params.id)
      this.props.fileActions.newFile(newFile);
      console.log(newFile)
      e.target.name_file.value="";
  };
  handleChangeFile = (e) => {
      let files = this.state.files;
      files[e.target.name] = e.target.value;
      this.setState({files});
      console.log(files)
  };
  uploadFile=(e)=>{
    let files = this.state.files;
    files["files"]=e.target.files[0];
    this.setState({files})
    let reader = new FileReader();
    let file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file: file,
          filePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file)
  }
  //delete file
  onDeleteFile=(i)=>{
   console.log("Voy a eliminar",i)
   this.props.fileActions.deleteFile(i);
  };

////////////////////////////////////////////
//add new Action
    onSubmitAction=(e)=>{
        e.preventDefault();
        let {newAction}= this.state;
        newAction['meeting']=parseInt(this.props.match.params.id)
        this.props.immediateActions.newAction(newAction);
        console.log(newAction)
        e.target.text.value="";
    };
    onChangeAction = (e) => {
        let {newAction} = this.state;
        newAction[e.target.name] = e.target.value;
        this.setState({newAction});
        console.log(newAction)
    };
    onDeleteAction=(i)=>{
     console.log("Voy a eliminar",i)
     this.props.immediateActions.deleteAction(i);
    };
    addPersonAction=(actionId, Id)=>{
       let {newAction}= this.state;
       newAction['id'] =parseInt(actionId)
       newAction['user']=parseInt(Id)
       this.props.immediateActions.editAction(newAction);
       console.log(newAction)
    }
    render(){

          let {employees, meeting,fetched,tasks,user,files,order,id,notes,immediate} = this.props;
          if(!fetched)return<Loader/>
          console.log(immediate)

        return(
                <div>
                  <AddParticipants
                    open={this.state.openParticipant}
                    employessListAdd={this.state.emploList}
                    employees={employees}
                    addEmployes={this.addEmployes}
                    addParticipants={this.addParticipants}
                    openParticipant={this.openParticipant}
                     />
                  <div className="meeting_box">
                    <div className="meetings-container">
                          <Accordion
                            employees={employees}
                            meeting={meeting}
                            order={order}
                            notes={notes}
                            id={id}
                            openListAdd={this.openParticipant}
                            isStaff={this.props.user.is_staff}
                            />
                          <TabsComponents
                            isStaff={this.props.user.is_staff}
                            employees={employees}
                            tasks={tasks}
                            files={files}
                            immediate={immediate}
                            openNewProject={this.openNewProject}
                            onSubmit={this.onSubmit}
                            onSubmitFile={this.onSubmitFile}
                            onSubmitAction={this.onSubmitAction}
                            onChange={this.handleChange}
                            onChangeAction={this.onChangeAction}
                            onDelete={this.onDelete}
                            addPerson={this.addPerson}
                            addPersonAction={this.addPersonAction}
                            addPriority={this.addPriority}
                            changeDateStart={this.changeDateStart}
                            onDate={this.onDate}
                            changeDateFinish={this.changeDateFinish}
                            uploadFile={this.uploadFile}
                            onChangeFile={this.handleChangeFile}
                            onDeleteFile={this.onDeleteFile}
                            onDeleteAction={this.onDeleteAction}
                            />
                    </div>
                  </div>
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
  let files = state.files.list.filter(c=>{
    return id == c.meeting.id;
  })
  let order = state.order.list.filter(d=>{
    return id == d.meeting.id
  })
  let notes = state.notes.list.filter(e=>{
    return id == e.meeting.id
  })
  let immediate = state.immediate.list.filter(f=>{
    return id == f.meeting.id
  })
  meeting=meeting[0]

    return {
      employees: state.employees.list,
      user: state.user.object,
      tasks,
      files,
      meeting,
      order,
      id,
      notes,
      immediate,
      fetched:  meeting!==undefined && tasks!==undefined && notes!==undefined,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        userActions:bindActionCreators(userActions,dispatch),
        employeesActions:bindActionCreators(employeesActions,dispatch),
        meetingActions:bindActionCreators(meetingActions,dispatch),
        tasksActions:bindActionCreators(tasksActions,dispatch),
        fileActions:bindActionCreators(fileActions,dispatch),
        orderActions:bindActionCreators(orderActions,dispatch),
        notesActions:bindActionCreators(notesActions,dispatch),
        immediateActions:bindActionCreators(immediateActions,dispatch),
    }
}

MeetingsPage = connect(mapStateToProps, mapDispatchToProps)(MeetingsPage);
export default MeetingsPage;
