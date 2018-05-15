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
              is_staff:null,
              is_superuser:null,
          },
          message:'Register Success!!!',
          value:null,
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
  selectChange = (event, index, value) => {
  let {usuario} = this.state;
    if(value ===1){
      usuario['is_staff']= false;
      usuario['is_superuser']=false;
      this.setState({value:value})
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

  render() {
    return (
          <Dialog
            title="Registro de Usuario"
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
              value={this.state.value}
              selectChange={this.selectChange}
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
