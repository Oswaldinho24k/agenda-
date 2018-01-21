import React from 'react';
import Dialog from 'material-ui/Dialog';
import EditProfileComponents from './EditProfileComponents';

 class EditProfileContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          profile: {
              user:'',
              full_name:'',
              address:'',
              phone_number:'',
          },
      };
  }


cancel=()=>{
  this.props.openCloseEdit()
}



  render() {
    return (

          <Dialog
            title="Edit Profile"
            modal={false}
            open={this.props.open}
            contentStyle={modStyle}
            onRequestClose={this.props.openCloseEdit}
          >
            <EditProfileComponents
              user={this.props.user}
              cancel={this.props.cancel}
            />
          </Dialog>
    );
  }openPass
}

var modStyle={
  width:'30%',
  minWidth: '250px',
}

export default EditProfileContainer;
