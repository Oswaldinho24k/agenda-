import React from 'react';
import Dialog from 'material-ui/Dialog';
import ChangePasswordComponents from './ChangePasswordComponents';

 class RegisterContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          pass: {
              password: '',
              password2:'',
          },
          error:null,
          passNo:null,
      };
  }

  handleChange = (e) => {
      let passw = this.state.pass;
      passw[e.target.name] = e.target.value;
      this.setState({passw});
      console.log(passw)
  };
  onSubmit=(e)=>{
  e.preventDefault();
  const newPassword= this.state.pass;
  if(newPassword.password !== newPassword.password2){
    this.setState({error:'Password doest mach',passNo:true})
  }
  else{
    this.setState({passNo:false})
  };
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

export default RegisterContainer;
