import React from 'react';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const Logged = ({logOut,openProfile}) => (
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon className='botonesNav' /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem onClick={openProfile} primaryText="Profile" />
    <MenuItem primaryText="Help" />
    <Divider />
    <MenuItem onClick={logOut} primaryText="Sign out" />


  </IconMenu>
);

export default Logged;
