import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


 class NewNote extends React.Component {
   state = {
     value: null,
   };

   handleChange = (event, index, value) => this.setState({value});
  render() {
    return (
          <Dialog
            title="Notas"
            modal={false}
            open={true}
            contentStyle={modStyle}
          >
            <div
              >
          <SelectField
             floatingLabelText="Frequency 012346789"
             labelStyle={{textAlign:'start'}}
             value={this.state.value}
             onChange={this.handleChange}
           >
             <MenuItem value={1} primaryText="Never" />
             <MenuItem value={2} primaryText="Every Night" />
             <MenuItem value={3} primaryText="Weeknights" />
             <MenuItem value={4} primaryText="Weekends" />
             <MenuItem value={5} primaryText="Weekly" />
           </SelectField>
             </div>
          </Dialog>
    );
  }
}

var modStyle={
  width:'100%',
  minWidth: '250px',
}

export default NewNote;

/*
<div>
    <FlatButton
      label="Cancelar"
      primary={false}
      style={{color:"rgb(244, 134, 135)"}}
    />
    <FlatButton
      label="Aceptar"
      primary={false}
      style={{color:"rgb(244, 134, 135)"}}
      type='submit'
    />
</div>

*/
