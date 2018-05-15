import React, {Component} from 'react';
import SingupComponent from "./SingupComponent";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userAllActions from '../../redux/actions/userAllActions'
import * as userActions from '../../redux/actions/userActions'
import ToastrContainer, {Toast,ToastDanger} from 'react-toastr-basic'

class SingupContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          usuario: {},
          message:'Registro completado',
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
      if(nuevoRegistro.password.length <= 5){

        ToastDanger('La contraseña debe contener 6 caracteres')

      }else{
        this.props.userAllActions.newUser(nuevoRegistro)
        .then(r=>{
              this.props.userActions.logIn(this.state.usuario)
              .then(r=>{
                Toast('welcome')
                this.props.history.push('/agenda')
              }).catch(e=>{
                for (let i in e.response.data){
                  ToastDanger(e.response.data[i])
                }
              })
         }).catch(e=>{
           for (let i in e.response.data){
             ToastDanger(e.response.data[i])
           }
         });
      }

  };
    render() {
        return (
            <div id="todo" >
              <ToastrContainer />
                <SingupComponent
                  onChange={this.handleChange}
                  onSubmit={this.onSubmit}
                />
            </div>
            );
        }
    }

    function mapStateToProps(state, ownProps) {
      const {usuario}= state.userAll.list
        return {
            usuario
        }
    }

    function mapDispatchToProps(dispatch){
      return{
        userAllActions:bindActionCreators(userAllActions,dispatch),
        userActions:bindActionCreators(userActions,dispatch)

      }
    }

    SingupContainer = connect(mapStateToProps, mapDispatchToProps)(SingupContainer);
export default SingupContainer;
