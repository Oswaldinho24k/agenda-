import React, {Component} from 'react';
import LoginComponent from "./LoginComponent";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const containerStyle = {
    height: '85vh',
    justifyContent: 'center'
};

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:{
                email: '',
                password: '',
            }
        };
    }

    loginWithPassword = (e) => {
        e.preventDefault();
        const user = Object.assign({},this.state.usuario);
        console.log(user.email + user.password);
        this.props.usuarioActions.iniciarSesion(user)
            .then( () => {
                this.props.history.push('/login');
            });

    };

    handleChange = (e) => {
        let usuario = this.state.usuario;
        usuario[e.target.name] = e.target.value;
        this.setState({usuario});
    };

    render(){
        return(
            <div className="App" style={containerStyle}>
                <LoginComponent
                    onChange={this.handleChange}
                    onSubmit={this.loginWithPassword}
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


export default connect(mapStateToProps) (LoginContainer);