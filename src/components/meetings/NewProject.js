import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class NewProject extends React.Component {



  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.openNewProject}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.openNewProject}
      />
    ];

    return (
      <div>
        <Dialog
          title="Nueva Tarea"
          actions={actions}
          modal={false}
          open={this.props.openProject}
          contentStyle={{width:'37%'}}
          onRequestClose={this.props.openNewProject}
        >
        <div className="detailTasks">
            <TextField
              name="Nombre de Proyecto"
              defaultValue='inserte nombre'
              underlineDisabledStyle={{display :  ' none '}}
              floatingLabelText="Nombre del Proyecto"
            />
        </div>
        </Dialog>
      </div>
    );
  }
}
