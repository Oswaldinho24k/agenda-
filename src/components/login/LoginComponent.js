import React from 'react';
import {TextField, RaisedButton} from 'material-ui';

const styleButton = {
    margin: '30px 0px 10px 0px',
    display: 'block'
};

const textFieldStyle = {
    display: 'block',
    margin: '5px 0px'
};

const formStyle = {
    width: '30vw',
    textAlign: 'center'
};

const pStyle = {
    fontSize: '14 px',
    display: 'inline'
};

const LoginComponent = (props) => {
    return (
        <form onSubmit={props.onSubmit}
        style={formStyle}>
            <TextField
                name="email"
                required
                floatingLabelText="E-mail"
                onChange={props.onChange}
                type="email"
                style={textFieldStyle}
                fullWidth={true}
            />
            <TextField
                name="password"
                required
                floatingLabelText="Contraseña"
                onChange={props.onChange}
                type="password"
                style={textFieldStyle}
                fullWidth={true}
            />
            <RaisedButton
                label="Entrar"
                primary={true}
                style={styleButton}
                type="submit"
                fullWidth={true}
            />
        </form>
    );
};

export default LoginComponent;