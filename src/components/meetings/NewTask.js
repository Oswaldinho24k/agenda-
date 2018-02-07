import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class NewTask extends React.Component {



  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.openNewTask}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.openNewTask}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Nueva Tarea"
          actions={actions}
          modal={false}
          open={this.props.openTask}
          contentStyle={{width:'37%'}}
          onRequestClose={this.props.openNewTask}
        >
        <div className="detailTasks">
            <TextField
              name="status"
              defaultValue='Realizada'
              underlineDisabledStyle={{display :  ' none '}}
              floatingLabelText="Status"
            />
            <TextField
              defaultValue="Bañar al perro es una tarea muy difcil por lo cual alguien debe hacerlo"
              floatingLabelText="Descripción"
              multiLine={true}
              rows={2}
              underlineDisabledStyle={{display :  ' none '}}
            />
            <div className='detailDateTasks'>
                <TextField
                  name="status"
                  defaultValue='Realizada'
                  underlineDisabledStyle={{display :  ' none '}}
                  floatingLabelText="Status"
                />
                <TextField
                  name="priority"
                  defaultValue='Alta'
                  underlineDisabledStyle={{display :  ' none '}}
                  floatingLabelText="Prioridad"
                />
            </div>
            <div className='detailDateTasks'>
                <TextField
                  name="fecha_inicio"
                  defaultValue='10-01-2005'
                  underlineDisabledStyle={{display :  ' none '}}
                  floatingLabelText="Fecha de Inicio"
                />
                <TextField
                  name="fecha_termino"
                  defaultValue='12-01-2005'
                  underlineDisabledStyle={{display :  ' none '}}
                  floatingLabelText="Fecha de Termino"
                />
            </div>
        </div>
        </Dialog>
      </div>
    );
  }
}
