import React,{Component}from 'react';
import EmployeesComponents from './EmployeesComponents';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import * as employeesActions from '../../redux/actions/employeesActions';
import * as userActions from '../../redux/actions/userActions';
import * as userAllActions from '../../redux/actions/userAllActions';
import RegisterContainer from '../register/RegisterContainer';
import {Toast} from 'react-toastr-basic';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DeleteUser from './DeleteUser'
import EditUserContainer from './EditUserContainer'
import Loader from '../common/Loading'

import './Employees.css';

class EmployeesContainer extends Component{
  state = {
      openRegister: false,
      openDelete:false,
      openEdit:false,
      user:{},
      message:"Eliminado",
      value:null,
  };
  showToast=(message)=>{
    Toast(message);
  }
  newUser = () => {
    let {openRegister}=this.state;
    openRegister = !openRegister
    this.setState({openRegister, showDrawer:false});
 };
   deleteUser = (data) => {
     let {openDelete}=this.state;
     openDelete = !openDelete
     let user= this.state.user;
     this.setState({openDelete,user:data});
     console.log(user)
  };
  confirmDelete=()=>{
    let id = this.state.user.id
      this.props.userAllActions.deleteUser(id);
      this.setState({openDelete:false})
      Toast(this.state.message)
    // console.log("El ID que voy a e=", id)
  }
  editUser=(data)=>{
    let {openEdit}=this.state;
    openEdit = !openEdit
    this.setState({openEdit,user:data});
    console.log(data)
  }
  confirmEdit=(e)=>{
    e.preventDefault();
    const newPerson= this.state.user;
   // console.log(newPerson);
   this.props.userAllActions.editUser(newPerson)
   Toast("Editado")
   console.log("voy a editar",newPerson)
   this.setState({openEdit:false})
  }
  handleChange = (e) => {
      let user = this.state.user;
      user[e.target.name] = e.target.value;
      this.setState({user});
      console.log(user)
  };
  selectChange = (event, index, value) => {
  let usuario = this.state.user;
    if(value ===1){
      usuario['is_staff']= false;
      usuario['is_superuser']=false;
      this.setState({uvalue:value})
      console.log(usuario)
    }else if(value===2){
      usuario['is_staff'] = true;
      usuario['is_superuser']=false;
      this.setState({value:value})
      console.log(usuario)
    }else if(value===3){
      usuario['is_staff'] = true;
      usuario['is_superuser']=true;
      this.setState({value:value})
      console.log(usuario)
    }
  };
  render(){
    const {user,userAll,fetched} = this.props;
  if(!fetched)return<Loader/>
    return(
      <div className=" tareas_box">
          <div className="cubierta">

                <EmployeesComponents
                  userAll={userAll}
                  openDelete={this.deleteUser}
                  openEdit={this.editUser}
                />
                {!user.is_staff ? null :
                  <div style={{display:'flex', justifyContent:'flex-end', marginRight:'20px'}}>
                  <FloatingActionButton  onClick={this.newUser} style={{ bottom:'30px',position:'fixed'}}>
                      <ContentAdd />
                  </FloatingActionButton>
                  </div>
                }
                <RegisterContainer
                  open={this.state.openRegister}
                  showToast={this.showToast}
                  openRegister={this.newUser}
              />
              <DeleteUser
                open={this.state.openDelete}
                close={this.deleteUser}
                user={this.state.user}
                confirmDelete={this.confirmDelete}
                />
                <EditUserContainer
                open={this.state.openEdit}
                user={this.state.user}
                showToast={this.showToast}
                onSubmit={this.confirmEdit}
                close={this.editUser}
                value={this.state.value}
                selectChange={this.selectChange}
                onChange={this.handleChange}
                />
            </div>

      </div>

    );
  }
}



function mapStateToProps(state, ownProps) {
 let userAll=state.userAll.list
 let user=state.user.object
    return {
       user,
       userAll,
       fetched:  userAll!==undefined && user!==undefined,
    }

}

function mapDispatchToProps(dispatch){
  return{
    employeesActions:bindActionCreators(employeesActions,dispatch),
    userActions:bindActionCreators(userActions,dispatch),
    userAllActions:bindActionCreators(userAllActions,dispatch)
  }
}

EmployeesContainer = connect (mapStateToProps,mapDispatchToProps)(EmployeesContainer);
export default EmployeesContainer;
