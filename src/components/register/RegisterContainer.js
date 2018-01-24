import React from 'react';
import Dialog from 'material-ui/Dialog';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions'
import RegisterComponents from './RegisterComponents';

 class RegisterContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          usuario: {
              username:'',
              email: '',
              password:'Perro182',
              password2:'Perro182',
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

      this.props.registerActions.newUser(nuevoRegistro)
      this.props.handleOpenCloseRegister()
      this.props.showToast(message)
  };






  render() {
    return (
          <Dialog
            title="User Register"
            modal={false}
            open={this.props.open}
            contentStyle={modStyle}
            onRequestClose={this.props.handleOpenCloseRegister}
          >
            <RegisterComponents
              onChange={this.handleChange}
              usuario={this.state.usuario}
              cancel={this.props.handleOpenCloseRegister}
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
  const {usuario}= state.register.list
    return {
        usuario
    }
}

function mapDispatchToProps(dispatch){
  return{
    registerActions:bindActionCreators(userActions,dispatch)
  }
}

RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
export default RegisterContainer;
