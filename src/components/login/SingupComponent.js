import React from 'react';
import {TextField, RaisedButton} from 'material-ui';
import {Card} from 'material-ui/Card';




const LoginComponent = ({onChange,onSubmit}) => {
    return (
        <div className="fl_lg">
            <Card id="car">
                <form onSubmit={onSubmit}
                      className="formStyle">
                    <h1>Registrate</h1>
                    <TextField
                        name="username"
                        required
                        onChange={onChange}
                        floatingLabelText="Nombre de usuario"
                        className="textFieldStyle"
                        fullWidth={true}
                    />
                    <TextField
                        name="email"
                        required
                        onChange={onChange}
                        floatingLabelText="E-mail"
                        type="email"
                        className="textFieldStyle"
                        fullWidth={true}
                    />
                    <TextField
                        name="password"
                        required
                        onChange={onChange}
                        floatingLabelText="Contraseña"
                        type="password"
                        className="textFieldStyle"
                        fullWidth={true}
                    />
                    <TextField
                        name="password2"
                        required
                        onChange={onChange}
                        floatingLabelText="Confirma tu contraseña"
                        type="password"
                        className="textFieldStyle"
                        fullWidth={true}
                    />
                    <RaisedButton
                        label="Crear cuenta"
                        primary={true}
                        className="styleButton"
                        type="submit"
                        fullWidth={true}
                    />
                </form>
            </Card>
        </div>
    );
};
  export default LoginComponent;
