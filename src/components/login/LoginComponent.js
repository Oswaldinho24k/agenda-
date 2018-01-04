import React from 'react';
import {TextField, RaisedButton} from 'material-ui';
import {Card} from 'material-ui/Card'

import './Form.css'


const LoginComponent = (props) => {
    return (
        <div id="todo">
            <Card id="car">
                <form onSubmit={props.onSubmit}
                      className="formStyle">
                    <h1>Acceder</h1>
                    <TextField
                        name="email"
                        required
                        floatingLabelText="E-mail"
                        onChange={props.onChange}
                        type="email"
                        className="textFieldStyle"
                        fullWidth={true}
                    />
                    <TextField
                        name="password"
                        required
                        floatingLabelText="Contraseña"
                        onChange={props.onChange}
                        type="password"
                        className="textFieldStyle"
                        fullWidth={true}
                    />
                    <RaisedButton
                        label="Entrar"
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