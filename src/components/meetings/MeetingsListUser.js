import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';


import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import RaisedButton from 'material-ui/RaisedButton';


const style = {
  ListUser: {
    width:'25%',
    margin: '3px auto',
  },
  Paper:{
    maxHeight:'290px',
  },
  menu:{
    width:' 100%',
  },
  btn:{
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '-40px',
    marginRight:'17px '
  },
  btnNewAsis:{
    marginTop:'5px',
  }
};

const MeetingsListUser = ({isStaff,employees,openListAdd,meeting}) => (
        <Paper style={style.Paper}  zDepth={1}>
            <Paper style={style.menu}>
              <List  >
                {meeting.participants.length <= 0?
                  [(isStaff?<RaisedButton
                    primary={true}
                    label="Agregar Asistentes"
                    style={style.btnNewAsis}
                    onClick={openListAdd}
                    />:null)]
                    :
                    <List style={{overflow:'auto', maxHeight:'260px'}}>
                  {meeting.participants.map(data => <ListItem key={data.id} style={{textAlign:'start'}}
                   primaryText={data.user.username}
                   leftAvatar={<Avatar src={data.avatar} />}
                   secondaryText={data.user.email}
                   />)}
                   </List>
               }
               </List>
          </Paper>
          {meeting.participants.length<= 0 ? null:[(!isStaff?null:<div key={10} style={style.btn}>
            <FloatingActionButton mini={true} onClick={openListAdd} >
              <ContentAdd />
            </FloatingActionButton>
          </div>)]}
        </Paper>
    );


export default MeetingsListUser;
