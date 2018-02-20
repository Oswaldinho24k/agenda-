import React, {Component} from 'react';
import LoginComponent from "./LoginComponent";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions'


class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            usuario: {
                email: '',
                password: '',
            }
        };
    }

    componentWillMount(){
    const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
    console.log(userToken)
    if(userToken){
          this.props.history.push('/agenda')
        }
      };

    handleChange = (e) => {
        let usuario = this.state.usuario;
        usuario[e.target.name] = e.target.value;
        this.setState({usuario});
        console.log(usuario)
    };

    logIn=(e)=>{
      e.preventDefault();
      this.props.userActions.logIn(this.state.usuario)
      .then(r=>{
        console.log('welcome')
        this.props.history.push('/agenda')
        //window.location.reload();

      }).catch(e=>{
        console.log(e)
      })
    };

    render() {
        return (
            <div id="todo" >
                <LoginComponent
                    onChange={this.handleChange}
                    onSubmit={this.logIn}
                    usuario={this.state.usuario}
                />
            </div>
            );
        }
    }

function mapStateToProps(state, ownProps) {
    return {
        usuario: state.usuario
    }
}

function mapDispatchToProps(dispatch){
  return{
    userActions:bindActionCreators(userActions,dispatch)
  }
}

LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
export default LoginContainer;
