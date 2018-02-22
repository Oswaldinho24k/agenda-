import React,{Component}from 'react';
import TableMeetingComponents from './TableMeetingComponents';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import * as meetingActions from '../../redux/actions/meetingActions';
import * as userActions from '../../redux/actions/userActions';
import NewMeetingContainer from './NewMeetingContainer';
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
    const {meeting,user}=this.props;

    return(
        <div className="Tablemeeting-container">
            <TableMeetingComponents
              meeting={meeting}
            />
            {user.is_staff ==! true ? null :
            <div style={{display:'flex', justifyContent:'flex-end',marginRight:'20px'}}>
              <FloatingActionButton onClick={this.openNewMeeting} style={{bottom:'30px', position:'fixed'}}>
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

    return {
       user: state.user.object,
       meeting: state.meeting.list
    }

}

function mapDispatchToProps(dispatch){
  return{
    meetingActions:bindActionCreators(meetingActions,dispatch),
    userActions:bindActionCreators(userActions,dispatch)
  }
}

TableMeetingContainer = connect (mapStateToProps,mapDispatchToProps)(TableMeetingContainer);
export default TableMeetingContainer;
