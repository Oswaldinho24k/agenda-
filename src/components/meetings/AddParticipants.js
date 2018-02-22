import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionSearch from 'material-ui/svg-icons/action/search';
import RaisedButton from 'material-ui/RaisedButton';
import ChipList from './ChipList';

import './meetings.css'

const style = {
  titile:{
    height:'60px'
  },
  btnAddAsis:{
    marginTop:'5px',
  },
  listEmployess:{
    overflow:'auto',
    maxHeight:'260px'
  }
};


const AddParticipants = ({employees,addEmployes,employessListAdd,addParticipants}) => (
            <List  desktop={true}>
               <Subheader style={style.titile}>Agregar Participante</Subheader>
              <Divider/>
                    <ChipList
                      employessListAdd={employessListAdd}
                      />
                    <div class="search">
                       <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                    </div>
               <Divider/>
               <List style={style.listEmployess}>
                 { employees.map(data =>
                  <ListItem
                 key={data.id}
                 value={data}
                 style={{textAlign:'start'}}
                 primaryText={data.user.username}
                 secondaryText={data.user.email}
                 leftAvatar={<Avatar src={data.avatar} />}
                 rightIcon={<ContentAdd/>}
                 onClick={()=>addEmployes(data)}
                 />)}
             </List>
              <Divider/>
              {employessListAdd.length<= 0 ? null :

              <RaisedButton
                  primary={true}
                  label="Agregar Asistentes"
                  style={style.btnAddAsis}
                  onClick={addParticipants}
                  />}
            </List>

    );


export default AddParticipants;
