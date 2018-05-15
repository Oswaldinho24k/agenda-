import React, {Component} from 'react';
import {Card,CardMedia,CardText,CardHeader} from 'material-ui/Card';
import {TextField, RaisedButton} from 'material-ui';

class InfoContainer extends Component {
    render() {
        return (
            <div id="todo" >

                <div className="fl_lg">

                    <Card id="car">
                      <CardHeader
                        titleStyle={{fontWeight:'bold'}}
                          title="Recupera tu contraseña"
                        />
                      <CardText>
                        <p style={{textAlign:'start'}}>Escribe tu email a continuación y te enviaremos las instrucciones para restablecer tu contraseña.</p>
                          <TextField
                              hintText="Dirección de email"
                              fullWidth={true}
                          />
                          <RaisedButton
                              label="Enviar"
                              primary={true}

                              fullWidth={true}
                          />

                        </CardText>
                    </Card>
                </div>

            </div>
            );
        }
    }

export default InfoContainer;
