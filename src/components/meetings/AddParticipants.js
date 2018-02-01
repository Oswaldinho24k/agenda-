import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionSearch from 'material-ui/svg-icons/action/search';
import RaisedButton from 'material-ui/RaisedButton';
import './meetings.css'

const style = {
  titile:{
    height:'60px'
  },
};

const AddParticipants = () => (

            <List  desktop={true}>
               <Subheader style={style.titile}>Agregar Participante</Subheader>
              <Divider/>
                    <div class="search">
                       <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                         <RaisedButton
                           primary={true}
                          icon={<ActionSearch />}
                        />
                    </div>
               <Divider/>
                 <ListItem style={{textAlign:'start'}}
                 primaryText="Pepe"
                 secondaryText="foggy@gmail.com"
                 leftAvatar={<Avatar src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-kayn-reveal/es_MX/94dcc05587bfb7cf3b581917f3dd6662df5eb212/assets/img/base-wallpaper.jpg" />}
                 rightIcon={<ContentAdd />}

                 />
            </List>

    );


export default AddParticipants;
