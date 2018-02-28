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
    width:'25%',
    margin: '3px auto',
  },
  Paper:{
    maxHeight:'280px',
  },
  menu:{
    width:' 100%'
  },
  btn:{
    textAlign:'end'
  },
  btnNewAsis:{
    marginTop:'5px',
  }
};

const MeetingsListUser = ({isStaff,employees,openListAdd,meeting}) => (
        <Paper style={style.Paper}  zDepth={1}>
            <div style={style.menu}>
              <List  desktop={true}>
                {meeting.participants.length <= 0?
                  [(isStaff?<RaisedButton
                    primary={true}
                    label="Agregar Asistentes"
                    style={style.btnNewAsis}
                    onClick={openListAdd}
                    />:null)]
                    :
                    <List>
                  {meeting.participants.map(data => <ListItem key={data.id} style={{textAlign:'start'}}
                   primaryText={data.user.username}
                   leftAvatar={<Avatar src={data.avatar} />}
                   secondaryText={data.user.email}
                   />)}
                   </List>
               }
               {meeting.participants.length<= 0 ? null:[(!isStaff?null:<div style={style.btn}>
                 <FloatingActionButton mini={true} onClick={openListAdd} >
                   <ContentAdd />
                 </FloatingActionButton>
               </div>)]}
               </List>
          </div>
        </Paper>
    );


export default MeetingsListUser;
