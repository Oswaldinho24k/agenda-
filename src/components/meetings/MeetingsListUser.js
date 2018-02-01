import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddParticipants from './AddParticipants';

const style = {
  ListUser: {
    width:'30%',
    margin: '3% auto',


  },
  Paper:{
    overflow: 'auto',
    maxHeight:'350px',
  },
  menu:{
    width:' 100%'
  },
  titile:{
    height:'73px'
  },
  btn:{
    display:'flex',
    justifyContent:'flex-end',
    position: 'relative',
    top: '-46px',
  }
};
let pokemon = true;
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
                 <ListItem style={{textAlign:'start'}}
                 primaryText="Root"
                 leftAvatar={<Avatar src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-kayn-reveal/es_MX/94dcc05587bfb7cf3b581917f3dd6662df5eb212/assets/img/base-wallpaper.jpg" />}
                 secondaryText="foggy@gmail.com"
                 />
             </List>}
          </div>
        </Paper>
        {pokemon == true ? null:<div style={style.btn}>
          <FloatingActionButton mini={true} style={style}>
            <ContentAdd />
          </FloatingActionButton>
        </div>}
      </div>



    );


export default MeetingsListUser;
