import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import ChipList from './ChipList';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import ContentAdd from 'material-ui/svg-icons/content/add';


export default class NewProject extends React.Component {



  render() {

    return (
      <div>
        <Dialog
          modal={false}
          open={this.props.open}
          contentStyle={{width:'26%'}}
        >

          <List style={{ heigt:'300px',maxHeight:'450px'}}>
                  <ChipList
                    employessListAdd={this.props.employessListAdd}
                    />
                  <div class="search">
                     <input type="text" class="searchTerm" placeholder="¿Encuentra?"/>
                  </div>
             <Divider/>
             <List style={style.listEmployess}>
               {this.props.employees.map(data =>
                <ListItem
               key={data.id}
               value={data}
               style={{textAlign:'start'}}
               primaryText={data.user.username}
               secondaryText={data.user.email}
               leftAvatar={<Avatar src={data.avatar} />}
               rightIcon={<ContentAdd/>}
               onClick={()=>this.props.addEmployes(data)}
               />)}
           </List>
          </List>
        <div className="btnMod">
            <FlatButton
              label="Cancelar"
              primary={true}
              onClick={this.props.openParticipant}
            />
            <FlatButton
              label="Agregar"
              primary={true}
            />
        </div>
        </Dialog>
      </div>
    );
  }
}

const style = {

  btnAddAsis:{
    marginTop:'5px',
  },
  listEmployess:{
    overflow:'auto',
    maxHeight:'315px'
  }
};
