import React,{Component}from 'react';
import TableMeetingComponents from './TableMeetingComponents';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import * as meetingActions from '../../redux/actions/meetingActions';
import * as userActions from '../../redux/actions/userActions';


class TableMeetingContainer extends Component{
   newMeeting = () => {
     this.props.history.push('/agenda/meeting/newmeetings')
  };
  render(){
    const {meeting,user}=this.props;
    console.log(meeting)
    console.log(user)
    return(
        <div className="Tablemeeting-container">
            {user.is_staff ==! true ? null : <RaisedButton onClick={this.newMeeting}label="New Meeting" primary={true} />}

            <TableMeetingComponents
              meeting={meeting}
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
