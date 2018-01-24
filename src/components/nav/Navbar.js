import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MenuNav from './MenuNav'

//onLeftIconButtonTouchTap = { isUser ? this.props.openDrawer : null}

const Navbar = ({logOut,user,openDrawer,openProfile}) => (
    <div>
        <AppBar
          title={<span className="titleNav">Welcome, {user.username}</span>}
          iconElementLeft={<IconButton><MenuIcon onClick={openDrawer}/></IconButton>}
          iconElementRight={ <MenuNav logOut={logOut} openProfile={openProfile} /> }
        />
    </div>
);


export default Navbar
