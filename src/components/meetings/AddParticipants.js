import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ChipList from './ChipList';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import ContentAdd from 'material-ui/svg-icons/content/add';



export default class NewProject extends React.Component {
constructor(props){
  super(props);
  this.state ={
    searchText:'',
  };
}
search=(event)=>{
  this.setState({searchText:event.target.value.substr(0,20)});
}

onDemo = (data) =>{
  this.props.addEmployes(data);
  this.setState({searchText:""})


}

  render() {
    let searchFilter =this.props.employees.filter(
      (name)=>{
        return name.user.username.toLowerCase().indexOf(
          this.state.searchText.toLowerCase()
        ) !==-1;
      }
    );
    let text=this.state.searchText;
    return (
      <div>
        <Dialog
          modal={false}
          open={this.props.open}
          contentStyle={{width:'26%'}}
        >
          <List style={{ heigt:'300px',maxHeight:'450px'}}>
                  <ChipList
                    deleteEmployees={this.props.deleteEmployees}
                    employessListAdd={this.props.employessListAdd}
                    />
                  <div className="search">
                     <input type="text" className="searchTerm" name="search" value={this.state.searchText} placeholder="¿Encuentra?" onChange={this.search}/>
                  </div>
             <Divider/>
             <List style={style.listEmployess}>
               {searchFilter.length<=0 ? <p>No se encontro "{text}"</p>:
                 searchFilter.map(data =>
                <ListItem
               key={data.id}
               value={data}
               style={{textAlign:'start'}}
               primaryText={data.user.username}
               secondaryText={data.user.email}
               leftAvatar={<Avatar src={data.avatar} />}
               rightIcon={<ContentAdd/>}
               onClick={()=>this.onDemo(data)}
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
              onClick={this.props.addParticipants}
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
