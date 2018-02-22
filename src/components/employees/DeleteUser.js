import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const customContentStyle = {
  width: '30%',
  maxWidth: 'none',
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
        onClick={this.props.confirmDelete}
      />,
    ];


    return (
      <div>
        <Dialog
          title={"¿Quieres eliminar a "+this.props.user.username +" definitivamente?"}
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.props.open}
          onRequestClose={this.props.close}
        >

        </Dialog>
      </div>
    );
  }
}
