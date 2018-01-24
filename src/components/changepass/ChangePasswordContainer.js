import React from 'react';
import Dialog from 'material-ui/Dialog';
import ChangePasswordComponents from './ChangePasswordComponents';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as passActions from '../../redux/actions/passActions'


 class ChangePasswordContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          password: {
              new_password1:'',
              new_password2:'',
          },
          error:null,
          passNo:null,
          message:"Change Password Success!!",
      };
  }

  handleChange = (e) => {
      let password= this.state.password;
      password[e.target.name] = e.target.value;
      this.setState({password});
      console.log(password)
  };
  onSubmit=(e)=>{
  e.preventDefault();
  const newPassword= this.state.password;
  const message=this.state.message;

  if(newPassword.new_password1.length <= 5){
    this.setState({error:'The password must contain at least 6 digits',passNo:true})

  }else{

    if(newPassword.new_password1 !== newPassword.new_password2){
      this.setState({error:'Password does not match',passNo:true})
    }  else{
        this.props.openClosePassword()
        this.props.passActions.changePass(newPassword)
        this.props.showToast(message)
        this.setState({passNo:false})

      };
  }

};
cancel=()=>{
  this.props.openClosePassword()
  this.setState({passNo:false})
}



  render() {
    return (

          <Dialog
            title="Change Password"
            modal={false}
            open={this.props.open}
            contentStyle={modStyle}
            onRequestClose={this.props.openClosePassword}
          >
            <ChangePasswordComponents
              cancel={this.cancel}
              onChange={this.handleChange}
              passNo={this.state.passNo}
              error={this.state.error}
              onSubmit={this.onSubmit}
            />
          </Dialog>
    );
  }
}

var modStyle={
  width:'30%',
  minWidth: '250px',
}

function mapStateToProps(state, ownProps) {
  const {password}= state.password.list
    return {
        password
    }
}

function mapDispatchToProps(dispatch){
  return{
    passActions:bindActionCreators(passActions,dispatch)
  }
}

ChangePasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer);
export default ChangePasswordContainer;
