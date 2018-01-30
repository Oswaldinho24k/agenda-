import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import ProfileComponents from './ProfileComponents';
import ChangePasswordContainer from '../changepass/ChangePasswordContainer';
import EditProfileContainer from '../editprofile/EditProfileContainer';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import * as profileActions from '../../redux/actions/profileActions';


class ProfileContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          openEditProfile: false,
          openChangePassword:false,
        };
  }


  openClosePassword = () => {
    let {openChangePassword}=this.state;
    openChangePassword = !openChangePassword
    this.setState({openChangePassword});
  };
  openCloseEdit= () => {
    let {openEditProfile}=this.state;
    openEditProfile = !openEditProfile
    this.setState({openEditProfile});
    this.props.openProfile()
  };
  render() {
    const {profile} = this.props;
    console.log(profile)
    return (
      <div>
        <Drawer
            docked={false}
            width={320}
            openSecondary={true}
            open={this.props.open}
            onRequestChange={this.props.openProfile}
          >
          <AppBar
            iconElementLeft={<IconButton><NavigationClose onClick={this.props.openProfile} /></IconButton>}
            title='Profile'
           />
         <ChangePasswordContainer
            open={this.state.openChangePassword}
            openClosePassword={this.openClosePassword}
            showToast={this.props.showToast}
           />
         <EditProfileContainer
            open={this.state.openEditProfile}
            openCloseEdit={this.openCloseEdit}
            showToast={this.props.showToast}
           />
         <ProfileComponents
            {...profile}
           openPass={this.openClosePassword}
           openEdit={this.openCloseEdit}
           user={this.props.user}

          />
        </Drawer>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
let profile = state.profile.object

    return {
       profile
    }

}

function mapDispatchToProps(dispatch){
  return{
    userActions:bindActionCreators(userActions,dispatch),
    profileActions:bindActionCreators(profileActions,dispatch)
  }
}

ProfileContainer = connect (mapStateToProps,mapDispatchToProps)(ProfileContainer);
export default ProfileContainer;
