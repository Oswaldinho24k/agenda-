import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class NewTask extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event, index, value) => this.setState({value});


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
              name="name"
              underlineDisabledStyle={{display :  ' none '}}
              floatingLabelText="Nombre"
            />
            <TextField

              floatingLabelText="Descripción"
              multiLine={true}
              rows={2}
              underlineDisabledStyle={{display :  ' none '}}
            />
            <div className='detailDateTasks'>
                <TextField
                  name="status"
                  defaultValue='Activo'
                  underlineDisabledStyle={{display :  ' none '}}
                  floatingLabelText="Status"
                />
                <SelectField
                  floatingLabelText="Prioridad"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <MenuItem value={1} primaryText="Alta" />
                  <MenuItem value={2} primaryText="Media" />
                  <MenuItem value={3} primaryText="Baja" />
                </SelectField>
            </div>
            <div className='detailDateTasks'>
                <TextField
                  name="fecha_inicio"
                  underlineDisabledStyle={{display :  ' none '}}
                  floatingLabelText="Fecha de Inicio"
                />
                <TextField
                  name="fecha_termino"
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
