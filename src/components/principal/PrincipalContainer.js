import React,{Component}from 'react';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import Pages from './Pages';
import * as userActions from '../../redux/actions/userActions';
import Navbar from '../nav/Navbar';
import Calendario from '../nav/Calendario';
import RegisterContainer from '../register/RegisterContainer';
import ProfileContainer from '../profile/ProfileContainer';
import ToastrContainer, {Toast} from 'react-toastr-basic'
class PrincipalContainer extends Component{
  state = {
      showDrawer: false,
      openRegister: false,
      openAlertR:false,
      openProfile:false,
  };

  openDrawer = () => {
      let {showDrawer} = this.state;
      showDrawer = !showDrawer;
      this.setState({showDrawer})
  };

  componentWillMount(){
  const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
  console.log(userToken)
  if(!userToken){
        this.props.history.push('/login')
      }
    };
    logOut=()=>{
      console.log("Cerre papu");
      this.props.userActions.logOut();
      this.props.history.push('/login');
    };

    handleOpenCloseRegister = () => {
      let {openRegister}=this.state;
      openRegister = !openRegister
      this.setState({openRegister, showDrawer:false});
    };
    closeAll=()=>{
      this.setState({openRegister:false, openAlertR:false})
    }

    AlertOpenCloseR =()=>{
      let {openAlertR}=this.state;
      openAlertR = !openAlertR
      this.setState({openAlertR});
    }
    openProfile = ()=>{
      let {openProfile}=this.state;
      openProfile = !openProfile
      this.setState({openProfile})
    }
    showToast=(message)=>{
      Toast(message);
    }

  render(){
    return(
      <div className="todo">
        <ToastrContainer />
        <Navbar
            openDrawer={this.openDrawer}
            user={this.props.user}
            logOut={this.logOut}
            openProfile={this.openProfile}
          />
          <Calendario
            user={this.props.user}
            open={this.state.showDrawer}
            handleOpenCloseRegister={this.handleOpenCloseRegister}
            toogleDrawer={this.openDrawer}
          />
          <RegisterContainer
            open={this.state.openRegister}
            showToast={this.showToast}
            handleOpenCloseRegister={this.handleOpenCloseRegister}
           />
            <ProfileContainer
             user={this.props.user}
             open={this.state.openProfile}
             openProfile={this.openProfile}
             showToast={this.showToast}
            />
          <div className="padre">
            <Pages/>
          </div>
      </div>

    );
  }
}

function mapStateToProps(state, ownProps) {

    return {
       user: state.user.object,
    }

}

function mapDispatchToProps(dispatch){
  return{
    userActions:bindActionCreators(userActions,dispatch)
  }
}

PrincipalContainer = connect (mapStateToProps,mapDispatchToProps)(PrincipalContainer);
export default PrincipalContainer;
