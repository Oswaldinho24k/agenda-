import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const customContentStyle = {
  width: '30%',
  maxWidth: 'none',
};

export default class DeleteMeeting extends React.Component {
  delete=()=>{
    this.props.close({data:{}})
  }
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
          title={"¿Quieres eliminar definitivamente esta junta?"}
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.props.open}
          onRequestClose={this.props.close}
        >
        <div className="textoDelete">
          <p>Ten en cuenta que todas las:
            <ul >
              <li>Tareas</li>
              <li>Notas</li>
              <li>Ordenes del día</li>
            </ul>
          se perderan y no podrán recuperarse</p>
        </div>

        </Dialog>
      </div>
    );
  }
}
