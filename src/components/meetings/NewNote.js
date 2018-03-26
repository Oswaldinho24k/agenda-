import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as notesActions from '../../redux/actions/notesActions';


 class NewNote extends React.Component {
 constructor(props) {
    super(props);
      this.state = {
          newNote:{},
          value: null,
          active:true,
       };
   }

   onSubmit =(e)=>{
     e.preventDefault();
     let {newNote}= this.state;
     newNote['meeting_id']=parseInt(this.props.id);
     this.props.notesActions.newNotes(newNote);
     this.props.close();
     this.setState({value:null,newNote:{}})
     console.log(newNote)
   }
   onChange = (e) => {
       let {newNote} = this.state;
       newNote[e.target.name] = e.target.value;
       this.setState({newNote});
       console.log(newNote)
   };
   handleChange = (event, index, value) => {
     let {newNote}=this.state;
     newNote['autor_id']=value;
     this.setState({value,})
     console.log(newNote)
  };
  cancel=()=>{
    this.setState({value:null,newNote:{}})
    this.props.close()
  }

  render() {
    let {newNote} = this.state;
    console.log(newNote)
    const actions = [

      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.cancel}
      />,
      <FlatButton
        label="Aceptar"
        primary={true}
        disabled={newNote.text == undefined || newNote.autor_id == undefined ?  this.state.active:false }
        onClick={this.onSubmit}
      />,
    ];
    return (
          <Dialog
            title="Notas"
            modal={true}
            open={this.props.open}
            contentStyle={modStyle}
            onRequestClose={this.props.close}
            actions={actions}
          >
          <SelectField
            style={{textAlign:'start'}}
            autoWidth={true}
            maxHeight={200}
            required={true}
            floatingLabelText='Autor'
            onChange={this.handleChange}
            value={this.state.value}
            >
            { this.props.employees.map(data =>
              <MenuItem key={data.id}  value={data.id}  primaryText={data.user.username}/>
          )}
         </SelectField>
            <TextField
              name='text'
              required={true}
              style={{textAlign:'start'}}
              floatingLabelText="Nota de usuario"
              multiLine={true}
              onChange={this.onChange}
              rows={2}
            />
          </Dialog>
    );
  }
}

var modStyle={
  width:'30%',
  minWidth: '250px',
}

function mapStateToProps(state, ownProps) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return{
        notesActions:bindActionCreators(notesActions,dispatch),
    }
}

NewNote = connect(mapStateToProps, mapDispatchToProps)(NewNote);

export default NewNote;
