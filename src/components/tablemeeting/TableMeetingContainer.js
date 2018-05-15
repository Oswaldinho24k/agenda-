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
import './tablemeeting.css'


class TableMeetingContainer extends Component{
  constructor(props) {
      super(props);
      this.state = {
        meeting:{},
        openNewMeeting:false,
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
    this.props.meetingActions.saveMeeting(newMeeting)
    this.setState({openNewMeeting:false})
    console.log(newMeeting)
    };

  render(){
    const {meeting,user,fetched}=this.props;
    if(!fetched)return<Loader/>
    return(
        <div className="Tablemeeting-container">
            <TableMeetingComponents
              meeting={meeting}
            />
            {!user.is_staff ? null :
            <div style={{display:'flex', justifyContent:'flex-end',marginRight:'20px'}}>
              <FloatingActionButton primary={false} onClick={this.openNewMeeting} style={{bottom:'50px', position:'fixed'}}  backgroundColor="rgb(244, 134, 135)">
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
        </div>

    );
  }
}



function mapStateToProps(state, ownProps) {
  let user =state.user.object;
  let profile = state.profile.object
  let meeting = state.meeting.list;
  if(user.is_superuser!== true){
    let userMeetings = meeting.filter(m=>{

      let participant = m.participants.find(p=>{
        return p.id == profile.id
      })
      if(participant!==undefined){
        console.log(m)
        return m
      }

    })
    meeting = userMeetings
  }else{
    meeting=meeting
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
