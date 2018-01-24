import React from 'react';
import Dialog from 'material-ui/Dialog';
import EditProfileComponents from './EditProfileComponents';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as profileActions from '../../redux/actions/profileActions'


 class EditProfileContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data: {},
          message:"Change success!!"
      };
  }


  handleChange = (e) => {
      let data = this.props.profile;
      data[e.target.name] = e.target.value;
      this.setState({data});

  };
  uploadphoto=(e)=>{
    let data = this.props.profile;
    data["avatar"]=e.target.files[0];
    this.setState({data})
  }


  onSubmit=(e)=>{
  e.preventDefault();
  const message=this.state.message;
  const nuevoRegistro= this.state.data;
  this.props.showToast(message)
  this.props.openCloseEdit()
  this.props.profileActions.saveProfile(nuevoRegistro)

};


  render() {
    const{profile}=this.props;
    return (
          <Dialog
            title="Edit Profile"
            modal={false}
            open={this.props.open}
            contentStyle={modStyle}
            onRequestClose={this.props.openCloseEdit}
          >
            <EditProfileComponents
              onChange={this.handleChange}
              uploadPhoto={this.uploadphoto}
              onSubmit={this.onSubmit}
              {...profile}
              cancel={this.cancel}
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
  let profile= state.profile.list
  console.log(profile)
    return {
        profile
    }
}

function mapDispatchToProps(dispatch){
  return{
    profileActions:bindActionCreators(profileActions,dispatch)
  }
}

EditProfileContainer = connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);
export default EditProfileContainer;
