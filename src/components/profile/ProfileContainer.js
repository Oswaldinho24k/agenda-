import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import TabProfile from './TabProfile';

export default class ProfileContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          openEditProfile: false,
          openChangePasswor:false
                };
  }

  handleToggle = () => this.setState({open: !this.state.open});

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
            style={appStyle}
           />
          <TabProfile
            user={this.props.user}/>
        </Drawer>
      </div>
    );
  }
}

const appStyle ={
  boxShadow:null
}
