import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


 class NewOrderOfDay extends React.Component {

  render() {
    return (
          <Dialog
            title="Orden del Dia"
            modal={false}
            open={this.props.open}
            contentStyle={modStyle}
            onRequestClose={this.props.close}
          >
          <form
            onSubmit={this.props.onSubmit}
            >
              <TextField
                name='name_action'
                required
                floatingLabelText="Orden del dia"
                onChange={this.props.onChange}
              />

               <div>
                   <FlatButton
                     label="Cancelar"
                     primary={false}
                     style={{color:"rgb(244, 134, 135)"}}
                     onClick={this.props.close}
                   />
                   <FlatButton
                     label="Aceptar"
                     primary={false}
                     style={{color:"rgb(244, 134, 135)"}}
                     type='submit'
                   />
               </div>
           </form>
          </Dialog>
    );
  }
}

var modStyle={
  width:'25%',
  minWidth: '250px',
}

export default NewOrderOfDay;
