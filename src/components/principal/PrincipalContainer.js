import React,{Component}from 'react';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import Pages from './Pages';
import * as userActions from '../../redux/actions/userActions';
import Navbar from '../nav/Navbar';
import Calendario from '../nav/Calendario';
import RegisterContainer from '../register/RegisterContainer';
import AlertRegister from '../common/AlertRegister';

class PrincipalContainer extends Component{
  state = {
      showDrawer: false,
      openRegister: false,
      openAlertR:false,
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

    AlertOpenCloseR =()=>{
      let {openAlertR}=this.state;
      openAlertR = !openAlertR
      this.setState({openAlertR});
    }

  render(){
    return(
      <div className="todo">
        <Navbar
            openDrawer={this.openDrawer}
            user={this.props.user}
            logOut={this.logOut}
          />
        <Calendario
            user={this.props.user}
            open={this.state.showDrawer}
            handleOpenCloseRegister={this.handleOpenCloseRegister}
            toogleDrawer={this.openDrawer}
          />
          <RegisterContainer
            open={this.state.openRegister}
            handleOpenCloseRegister={this.handleOpenCloseRegister}
            AlertOpenCloseR={this.AlertOpenCloseR}
            />
            <AlertRegister
              open={this.state.openAlertR}
              handleOpenCloseRegister={this.handleOpenCloseRegister}
              AlertOpenCloseR={this.AlertOpenCloseR}

            />
          <div className="padre">
            <Pages/>
          </div>
      </div>

    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state.user)
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
