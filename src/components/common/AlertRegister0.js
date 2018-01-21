import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export default class AlertRegister extends React.Component {
  closeAll = ()=>{
    this.props.AlertOpenCloseR()
    this.props.handleOpenCloseRegister()
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={this.closeAll}
      />
    ];

    return (
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          contentStyle={alertStyle}
          onRequestClose={this.props.AlertOpenCloseR}
        >
          <p style={{color:'green', fontWeigth:'blod'}}>Register Success!!</p>
        </Dialog>
    );
  }
}

var alertStyle={
  width:'20%',
  minWidth: '250px',
}
