import React,{Component}from 'react';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import Pages from './Pages';
import * as userActions from '../../redux/actions/userActions';
import Navbar from '../nav/Navbar';
import Calendario from '../nav/Calendario';
import ProfileContainer from '../profile/ProfilePage';
import ToastrContainer, {Toast} from 'react-toastr-basic'
import * as profileActions from '../../redux/actions/profileActions';



class PrincipalContainer extends Component{
  state = {
      showDrawer: false,
      openAlertR:false,
      openProfile:false,
      openNewMeeting:false,
  };

  openDrawer = () => {
      let {showDrawer} = this.state;
      showDrawer = !showDrawer;
      this.setState({showDrawer});
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

    closeAll=()=>{
      this.setState({openRegister:false, openAlertR:false})
    };

    AlertOpenCloseR =()=>{
      let {openAlertR}=this.state;
      openAlertR = !openAlertR
      this.setState({openAlertR});
    };
    openProfile = ()=>{
      let {openProfile}=this.state;
      openProfile = !openProfile
      this.setState({openProfile})
    };
    showToast=(message)=>{
      Toast(message);
    };


  render(){
    const {profile} = this.props;
    return(
      <div className="todo">
        <ToastrContainer />
        <Navbar
            openDrawer={this.openDrawer}
            logOut={this.logOut}
            openProfile={this.openProfile}
            {...profile}
          />
          <Calendario
            user={this.props.user}
            open={this.state.showDrawer}
            handleOpenCloseRegister={this.handleOpenCloseRegister}
            toogleDrawer={this.openDrawer}
            openCloseNewMeeting={this.openCloseNewMeeting}
          />
            <ProfileContainer
             open={this.state.openProfile}
             openProfile={this.openProfile}
             showToast={this.showToast}
            />
          <div  style={{ minHeight: '90vh' }}>
            <Pages/>
          </div>
      </div>

    );
  }
}

function mapStateToProps(state, ownProps) {

    return {
       user: state.user.object,
       profile: state.profile.object
    }

}

function mapDispatchToProps(dispatch){
  return{
    userActions:bindActionCreators(userActions,dispatch),
    profileActions:bindActionCreators(profileActions,dispatch)
  }
}

PrincipalContainer = connect (mapStateToProps,mapDispatchToProps)(PrincipalContainer);
export default PrincipalContainer;
