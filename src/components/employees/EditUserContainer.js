import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const customContentStyle = {
  width: '30%',
  minWidth: '300px',
};

export default class DialogExampleCustomWidth extends React.Component {




  render() {
    const actions = [

      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.props.close}
      />,
      <FlatButton
        label="Aceptar"
        primary={true}
        onClick={this.props.onSubmit}

      />,
    ];

    return (
      <div
        >
        <Dialog
          title="Editar"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.props.open}
        >

        <TextField
            floatingLabelText="Nombre de usuario"
            name="username"
            defaultValue={this.props.user.username}
            required
            onChange={this.props.onChange}
          />
          <TextField
              floatingLabelText="Email"
              name="email"
              defaultValue={this.props.user.email}
              required
              type="email"
              onChange={this.props.onChange}
            />
            <SelectField
              floatingLabelText="Categoria"
              value={this.props.value}
              onChange={this.props.selectChange}
              floatingLabelFixed={true}
              hintStyle={{color:'rgba(0, 0, 0, 0.87)'}}
              hintText={this.props.user.is_superuser ?"Administrador":[(!this.props.user.is_staff?"Empleado":"ProductManager")]}
            >
              <MenuItem value={1} primaryText="Empleado" />
              <MenuItem value={2} primaryText="ProductManager" />
              <MenuItem value={3} primaryText="Administrador" />

            </SelectField>
        </Dialog>
      </div>
    );
  }
}
