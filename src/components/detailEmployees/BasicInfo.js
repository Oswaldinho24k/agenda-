import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
//Icons
import Person from 'material-ui/svg-icons/action/perm-identity';
import Divider from 'material-ui/Divider';
import Home from 'material-ui/svg-icons/action/home';
import Mail from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/call';


const style = {
  paper: {
    width:'100%',
    display: 'flex',
    justifyContent:'flex-start',
    margin: '4% auto',


  },
  menu:{
    width:'50%'
  },
  rightIcon: {

    textAlign: 'center',
    lineHeight: '24px',
  },
  item:{
    color:'#757575',
    maxWidth:'100%'

  }
};

const BasicInfo = ({name,phone,address,user}) => (
        <Paper style={style.paper}  zDepth={1}>
          <Menu style={style.menu} desktop={true}>
            <MenuItem primaryText={name} leftIcon={<Person />} disabled={true} style={style.item}/>
            <MenuItem primaryText={user.email} leftIcon={<Mail />} disabled={true} style={style.item}/>
            <Divider />
          </Menu>
          <Menu style={style.menu} desktop={true}>
            <MenuItem primaryText={phone} leftIcon={<Phone />} disabled={true} style={style.item} />
            <MenuItem primaryText={address} leftIcon={<Home />} disabled={true} style={style.item}/>
            <Divider />
          </Menu>
        </Paper>


    );


export default BasicInfo;
