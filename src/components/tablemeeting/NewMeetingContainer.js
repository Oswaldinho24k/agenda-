import React from 'react';
import Dialog from 'material-ui/Dialog';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as meetingActions from '../../redux/actions/meetingActions'
import NewMeetingComponents from './NewMeetingComponents';

 class NewMeetingContainer extends React.Component {


  render() {
    return (
          <Dialog
            title="Nueva Reunión"
            modal={false}
            open={this.props.open}
            contentStyle={modStyle}
            onRequestClose={this.props.openClose}
          >
              ¿Quieres programar una reunión?
            <NewMeetingComponents
              onChange={this.props.handleChange}
              onChangeDate={this.props.handleChangeDate}
              onSubmit={this.props.onSubmit}
              cancel={this.props.openClose}
            />
          </Dialog>
    );
  }
}

var modStyle={
  width:'30%',
  minWidth: '250px',
}
function mapStateToProps(state, ownProps) {
  const {meeting}= state.meeting.list
    return {
        meeting
    }
}

function mapDispatchToProps(dispatch){
  return{
    meetingActions:bindActionCreators(meetingActions,dispatch)
  }
}

NewMeetingContainer = connect(mapStateToProps, mapDispatchToProps)(NewMeetingContainer);
export default NewMeetingContainer;
