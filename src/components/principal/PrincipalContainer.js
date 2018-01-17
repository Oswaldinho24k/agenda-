import React,{Component}from 'react';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import Pages from './Pages';
import * as userActions from '../../redux/actions/userActions';
import Navbar from '../nav/Navbar';
import Calendario from '../nav/Calendario';

class PrincipalContainer extends Component{
  state = {
      showDrawer: false
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

  render(){
    return(
      <div>
        <Navbar
            openDrawer={this.openDrawer}
            user={this.props.user}
            logOut={this.logOut}
          />
        <Calendario open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>
          <div className="padre">
            <Pages/>
          </div>
      </div>

    );
  }
}

function mapStateToProps(state, ownProps) {
  //console.log(state)
    return {
       user: state.user.object
    }
}

function mapDispatchToProps(dispatch){
  return{
    userActions:bindActionCreators(userActions,dispatch)
  }
}

PrincipalContainer = connect (mapStateToProps,mapDispatchToProps)(PrincipalContainer);
export default PrincipalContainer;
