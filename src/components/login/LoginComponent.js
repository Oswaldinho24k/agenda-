import React from 'react';
import {TextField, RaisedButton} from 'material-ui';
import {Card} from 'material-ui/Card'
import {Link} from 'react-router-dom';


const LoginComponent = ({onChange,onSubmit,usuario}) => {
    return (
        <div className="fl_lg">
            <Card id="car">
                <form
                      onSubmit={onSubmit}
                      className="formStyle">
                    <h1>Iniciar sesión</h1>
                    <TextField
                        name="email"
                        required
                        floatingLabelText="E-mail"
                        onChange={onChange}
                        type="email"
                        className="textFieldStyle"
                        fullWidth={true}
                    />
                    <TextField
                        name="password"
                        required
                        floatingLabelText="Contraseña"
                        onChange={onChange}
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
                  <span style={{marginTop:'7%'}}>¿Quieres trabajar con nosotros?  <Link style={{color:'black',textDecoration:'none',fontWeight:'bold'}} to={"/singup"}>registrate</Link></span>

                  <Link style={{color:'black',textDecoration:'none',fontWeight:'bold'}} to={"/info"}>Olvidaste tu contraseña</Link>
                </form>

            </Card>
        </div>
    );
};
  export default LoginComponent;
