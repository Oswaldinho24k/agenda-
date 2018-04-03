import React,{Component}from 'react';
import TableMeetingComponents from './TableMeetingComponents';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import * as meetingActions from '../../redux/actions/meetingActions';
import * as userActions from '../../redux/actions/userActions';
import * as profileActions from '../../redux/actions/profileActions';
import NewMeetingContainer from './NewMeetingContainer';
import Loader from '../common/Loading'
import DeleteMeeting from './DeleteMeeting';
import './tablemeeting.css'
import ToastrContainer, {Toast,ToastDanger} from 'react-toastr-basic'


class TableMeetingContainer extends Component{
  constructor(props) {
      super(props);
      this.state = {
        meeting:{},
        openNewMeeting:false,
        openDelete:false
      };
  }
  //Meeting

  openNewMeeting=()=>{
  let {openNewMeeting} = this.state;
  openNewMeeting = !openNewMeeting;
  this.setState({openNewMeeting})
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
    newMeeting['participants_id'] =[];
    this.props.meetingActions.saveMeeting(newMeeting)
    this.setState({openNewMeeting:false})
    console.log(newMeeting)
    };
    deleteMeeting = (data) => {
      let {openDelete}=this.state;
      openDelete = !openDelete
      let meeting= Object.assign({},this.state.meeting);
      this.setState({openDelete,meeting:data});
      console.log(meeting)
   };
   confirmDelete=()=>{
     let id = this.state.meeting.id
      this.props.meetingActions.deleteMeeting(id)
      .then(r=>{
        Toast('¡Junta Eliminada!')

      }).catch(e=>{
          ToastDanger("Algo salio mal intentalo de nuevo mas tarde")
      })
      this.setState({openDelete:false})
      console.log("El ID que voy a e=", id)
   }
  render(){
    const {meeting,user,fetched}=this.props;
    if(!fetched)return<Loader/>
    console.log(meeting)
    return(
        <div className="Tablemeeting-container">
            <TableMeetingComponents
              meeting={meeting}
              opendelete={this.deleteMeeting}
              isStaff={user.is_superuser}
            />
            {!user.is_staff ? null :
            <div style={{display:'flex', justifyContent:'flex-end',marginRight:'20px'}}>
              <FloatingActionButton primary="true" onClick={this.openNewMeeting} style={{bottom:'50px', position:'fixed'}}  >
                  <ContentAdd />
              </FloatingActionButton>
            </div>
            }
            <NewMeetingContainer
              open={this.state.openNewMeeting}
              openClose={this.openNewMeeting}
              handleChange={this.handleChange}
              handleChangeDate={this.handleChangeDate}
              onSubmit={this.onSubmit}
            />
            <DeleteMeeting open={this.state.openDelete} confirmDelete={this.confirmDelete} close={this.deleteMeeting}/>
        </div>

    );
  }
}



function mapStateToProps(state, ownProps) {
  let user =state.user.object;
  let profile = state.profile.object
  let meeting = state.meeting.list;
  if(user.is_superuser){
    meeting = state.meeting.list;
  }else{
    meeting=state.meeting.myMeetings;
  }


  console.log(meeting)
    return {
      user,
      profile,
       meeting,
       fetched:  meeting!==undefined && state.meeting.list!==undefined,
    }

}

function mapDispatchToProps(dispatch){
  return{
    meetingActions:bindActionCreators(meetingActions,dispatch),
    userActions:bindActionCreators(userActions,dispatch),
    profileActions:bindActionCreators(profileActions,dispatch)
  }
}

TableMeetingContainer = connect (mapStateToProps,mapDispatchToProps)(TableMeetingContainer);
export default TableMeetingContainer;
