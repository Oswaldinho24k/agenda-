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
  },
  btnNewAsis:{
    marginTop:'5px',
  }
};

const MeetingsListUser = ({isStaff,employees,addEmployes,employessListAdd,meeting,openListAdd,listAddEmp,addParticipants}) => (
      <div style={style.ListUser}>
        <Paper style={style.Paper}  zDepth={1}>
            <div style={style.menu}>
        {listAddEmp == false ?
                <AddParticipants
                    employessListAdd={employessListAdd}
                    employees={employees}
                    addEmployes={addEmployes}
                    addParticipants={addParticipants}
                  />
                :
            <List  desktop={true}>
               <Subheader style={style.titile}>Lista de participantes</Subheader>
               <Divider/>
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
             </List>}
          </div>
        </Paper>

      </div>



    );


export default MeetingsListUser;
