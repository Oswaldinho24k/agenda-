import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddParticipants from './AddParticipants';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  ListUser: {
    width:'35%',
    margin: '3px auto',


  },
  Paper:{
    maxHeight:'500px',
  },
  menu:{
    width:' 100%'
  },
  titile:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'73px'
  },
  btn:{
    display:'flex',
    justifyContent:'flex-end',
    position: 'relative',
    top: '-46px',
  },
  btnNewAsis:{
    marginTop:'5px',
  }
};
let pokemon = false;
let usuario = true;
const MeetingsListUser = () => (
      <div style={style.ListUser}>
        <Paper style={style.Paper}  zDepth={1}>
            <div style={style.menu}>
        {pokemon == true ?
                <AddParticipants/>
                :
            <List  desktop={true}>
               <Subheader style={style.titile}>Lista de participantes</Subheader>
               <Divider/>
              {usuario ==false?
                <RaisedButton
                  primary={true}
                  label="Agregar Asistentes"
                  style={style.btnNewAsis}
                  />
                  :
                <ListItem style={{textAlign:'start'}}
                 primaryText="Root"
                 leftAvatar={<Avatar src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-kayn-reveal/es_MX/94dcc05587bfb7cf3b581917f3dd6662df5eb212/assets/img/base-wallpaper.jpg" />}
                 secondaryText="foggy@gmail.com"
                 />}
             </List>}
          </div>
        </Paper>
        {usuario == false ? null:<div style={style.btn}>
          <FloatingActionButton mini={true} >
            <ContentAdd />
          </FloatingActionButton>
        </div>}
      </div>



    );


export default MeetingsListUser;
