import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import ProfileComponents from './ProfileComponents';
import ChangePasswordContainer from '../changepass/ChangePasswordContainer';
export default class ProfileContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          openEditProfile: false,
          openChangePassword:false
                };
  }


  openClosePassword = () => {
    let {openChangePassword}=this.state;
    openChangePassword = !openChangePassword
    this.setState({openChangePassword});
  };
  render() {

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
            title='Pofile'
           />
         <ChangePasswordContainer
            open={this.state.openChangePassword}
            openClosePassword={this.openClosePassword}
           />
         <ProfileComponents
           openPass={this.openClosePassword}
           user={this.props.user}
          />
        </Drawer>
      </div>
    );
  }
}

const appStyle ={
  boxShadow:null
}
