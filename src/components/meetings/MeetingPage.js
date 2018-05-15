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
import * as userAllActions from '../../redux/actions/userAllActions';
import * as immediateActions from '../../redux/actions/immediateActions';
import Loader from '../common/Loading';
import AddParticipants from './AddParticipants';
import TabsComponents from './TabsComponents';
import Accordion from './Accordion';
import NewNote from './NewNote'
import './meetings.css';

class MeetingsPage extends Component{

  constructor(props) {
      super(props);
      this.state = {
          task: {},
          files:{},
          newAction:{},
          emploList:[],
          usersList:props.employees,
          employSelec:{},
          listAddEmp:true,
          openProject:false,
          openParticipant:false,
          user:{},
          priority:{},
          date:{},
          newNotes:false,
      };
  }

  componentWillReceiveProps(){
    //falta filtrar los que ya son parte
    // this.filterUserslistDisplay()
    this.usersList()
  }

  usersList=()=>{
    let usersList = this.props.employees;
    this.setState({
      usersList
    })
  }

  filterUserslistDisplay=()=>{
     let {usersList} = this.state;
    let meeting = this.props.meeting;
    if(meeting){
      let participants = meeting.participants;
      let filtered = usersList.filter(u=>{

        let participant = participants.find(p=>{
          return p.id === u.id
        })
        if(participant!==undefined){
            console.log(participant)
            console.log(u)
            //return u
        }else{
          return u
        }
      })
      usersList = filtered
      console.log(usersList)
    }else{
      usersList = this.props.employees
    }
     this.setState({
       usersList
     })
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
    this.setState({openParticipant,emploList:this.props.meeting.participants})
        this.filterUserslistDisplay()

  }
  addEmployes=(data)=>{

    let emploList = this.state.emploList.slice();
    let usersList = this.state.usersList.slice();

    emploList.push(data);
    let filtered = usersList.filter(user=>{
      return user.id!==data.id
    })
    this.setState({
      emploList,
      usersList:filtered
    })

  }
  deleteEmployees = (data) => {
    let emploList = this.state.emploList.slice();
    let usersList = this.state.usersList.slice();

    usersList.push(data);
    let filtered = emploList.filter(user=>{
      return user.id!==data.id
    })
    this.setState({
      emploList:filtered,
      usersList
    })

  };

  openListAdd = () => {
      let {listAddEmp} = this.state;
      listAddEmp = !listAddEmp;
      this.setState({listAddEmp})
  };
  addParticipants=()=>{
    let meeting=this.props.meeting;
    let data=Object.assign({},this.state.emploList);
    let users=[];
    for(let i in data){
      users.push(data[i].id)
    }

    meeting['participants_id']= users;
    this.props.meetingActions.editMeeting(meeting);
    this.setState({openParticipant:false})
    console.log(meeting)
  }
//////////////////////////////////

  //add new Task
  onSubmit=(e)=>{
      e.preventDefault();
      let newTask= Object.assign({},this.state.task);
      newTask['meeting_id']=parseInt(this.props.match.params.id)
      newTask['user_id']=null;
      this.props.tasksActions.saveTask(newTask);
      console.log(newTask)
      e.target.name.value="";
  };
  handleChange = (e) => {
      let task = Object.assign({}, this.state.task);
      task[e.target.name] = e.target.value;
      this.setState({task});
      console.log(task)
  };
  //Table TASK
  addPerson=(taskId, userId)=>{
     let newPerson= Object.assign({},this.state.user);
     newPerson['id'] =parseInt(taskId)
     newPerson['user_id']=parseInt(userId)
    this.props.tasksActions.editTask(newPerson);
  }
  addPriority=(taskId,value)=>{
    let priority= Object.assign({},this.state.priority);
    priority['id'] =parseInt(taskId)
    priority['priority']=value

    this.props.tasksActions.editTask(priority);
  }
  onDelete=(i)=>{
   console.log("Voy a eliminar",i)
   this.props.tasksActions.deleteTask(i);
  };
  changeDateStart = (e,date) => {
      let dateS= Object.assign({},this.state.date);
      dateS['starts'] = date;
      this.props.tasksActions.editTask(dateS)
      console.log(dateS)
  };
  changeDateFinish = (e,date) => {
      let dateS= Object.assign({},this.state.date);
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
      let newFile= Object.assign({},this.state.files);
      newFile['meeting_id']=parseInt(this.props.match.params.id)
      this.props.fileActions.newFile(newFile);
      console.log(newFile)
      e.target.name_file.value="";
      this.setState({files:{}})
  };
  handleChangeFile = (e) => {
      let files = Object.assign({},this.state.files);
      files[e.target.name] = e.target.value;
      this.setState({files});
      console.log(files)
  };
  uploadFile=(e)=>{
    let files = Object.assign({},this.state.files);
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
        let newAction= Object.assign({},this.state.newAction);
        newAction['meeting_id']=parseInt(this.props.match.params.id)
        newAction['user_id']=null;
        this.props.immediateActions.newAction(newAction);
        console.log(newAction)
        e.target.text.value="";
    };
    onChangeAction = (e) => {
        let newAction = Object.assign({},this.state.newAction);
        newAction[e.target.name] = e.target.value;
        this.setState({newAction});
        console.log(newAction)
    };
    onDeleteAction=(i)=>{
     console.log("Voy a eliminar",i)
     this.props.immediateActions.deleteAction(i);
    };
    addPersonAction=(actionId, Id)=>{
       let newAction= Object.assign({},this.state.newAction);
       newAction['id'] =parseInt(actionId)
       newAction['user_id']=parseInt(Id)
       this.props.immediateActions.editAction(newAction);
       console.log(newAction)
    }
    ////////////////////////////////////////////
    //Note

    openNote=()=>{
       let {newNotes} = this.state
      newNotes =! newNotes
      this.setState({newNotes})
    }
  //delete note
  onDeleteNote=(i)=>{
   console.log("Voy a eliminar",i)
   this.props.notesActions.deleteNotes(i);
  };
    render(){

          let {userAll,employees, meeting,fetched,tasks,user,files,order,id,notes,immediate} = this.props;
          let usersList = this.state.usersList;
          if(!fetched)return<Loader/>
        return(
                <div>
                  <AddParticipants
                    open={this.state.openParticipant}
                    employessListAdd={this.state.emploList}
                    employees={usersList}
                    meeting={meeting}
                    deleteEmployees={this.deleteEmployees}
                    addEmployes={this.addEmployes}
                    addParticipants={this.addParticipants}
                    openParticipant={this.openParticipant}

                     />
                   <NewNote open={this.state.newNotes}
                            close={this.openNote}
                            employees={this.props.employees}
                            id={id}
                    />
                  <div className="meeting_box">
                    <div className="meetings-container">
                          <Accordion
                            employees={employees}
                            meeting={meeting}
                            order={order}
                            id={id}
                            usersList={this.usersList}
                            openListAdd={this.openParticipant}
                            isStaff={this.props.user.is_staff}
                            />
                          <TabsComponents
                            notes={notes}
                            isStaff={this.props.user.is_staff}
                            userAll={userAll}
                            tasks={tasks}
                            files={files}
                            immediate={immediate}
                            meeting={meeting}
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
                            onDeleteNote={this.onDeleteNote}
                            archivo={this.state.files}
                            openNote={this.openNote}
                            />
                    </div>
                  </div>
                </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  let user= state.user.object;
  let meeting;
  let tasks = state.tasks.list;
  if(user.is_superuser){
    meeting = state.meeting.list.find(a=>{
        return id == a.id;
    });
     tasks = state.tasks.list.filter(b=>{
      return id == b.meeting.id;
    })
  }else{
    meeting=state.meeting.myMeetings.find(a=>{
        return id == a.id;
    });
  }

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

    return {
      userAll: state.userAll.list,
      employees: state.employees.list,
      user,
      tasks,
      files,
      meeting,
      order,
      id,
      notes,
      immediate,
      fetched:  meeting!==undefined && tasks!==undefined && notes!==undefined && state.employees.list !== undefined && tasks!==undefined,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        userAllActions:bindActionCreators(userAllActions,dispatch),
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
