import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentDone from 'material-ui/svg-icons/action/done';
import ContentWrong from 'material-ui/svg-icons/navigation/close';


const style = {
  ListTasksProject: {
    width:'30%',
    minWidth:'200px',
    marginTop:'10px',
  },
  Paper:{
    maxHeight:'400px',
    height:'400px'
  },
  menu:{
    width:' 100%'
  },
  titile:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'73px',

    paddingLeft:'none',
  },
  listsTasksContainer:{
    overflow:'auto',
    height:'300px',
    maxHeight:'300px',
  }
};

const ListTasksProject = () => (
      <div style={style.ListTasksProject}>
        <Paper style={style.Paper}  zDepth={1}>
          <div style={style.menu}>
          <List   desktop={true}>
             <Subheader style={style.titile}>Lista de tareas y tareitas</Subheader>
             <Divider/>
             <List style={style.listsTasksContainer}>
               <ListItem
                style={{textAlign:'start'}}
                primaryText="bañar al perro" leftIcon={<ContentDone />}
                />
                <ListItem
                 style={{textAlign:'start'}}
                 primaryText="bañar al gato" leftIcon={<ContentWrong />}
                 />
             </List>
           </List>
          </div>
        </Paper>
      </div>
    );


export default ListTasksProject;
