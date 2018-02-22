import React from 'react';
import Dialog from 'material-ui/Dialog';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userAllActions from '../../redux/actions/userAllActions'
import RegisterComponents from './RegisterComponents';

 class RegisterContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          usuario: {
              username:'',
              email: '',
              password:'Agenda182',
              password2:'Agenda182',
          },
          message:'Register Success!!!'
      };
  }

  handleChange = (e) => {
      let usuario = this.state.usuario;
      usuario[e.target.name] = e.target.value;
      this.setState({usuario});
      console.log(usuario)
  };

  onSubmit=(e)=>{
      e.preventDefault();
      const nuevoRegistro= this.state.usuario;
      const message= this.state.message;

      this.props.userAllActions.newUser(nuevoRegistro)
      this.props.openRegister()
      this.props.showToast(message)
  };






  render() {
    return (
          <Dialog
            title="User Register"
            modal={false}
            open={this.props.open}
            contentStyle={modStyle}
            onRequestClose={this.props.openRegister}
          >
            <RegisterComponents
              onChange={this.handleChange}
              usuario={this.state.usuario}
              cancel={this.props.openRegister}
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
  const {usuario}= state.userAll.list
    return {
        usuario
    }
}

function mapDispatchToProps(dispatch){
  return{
    userAllActions:bindActionCreators(userAllActions,dispatch)
  }
}

RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
export default RegisterContainer;
