import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fastNoteActions from '../../redux/actions/fastNoteActions';


 class NewFastNote extends React.Component {
 constructor(props) {
    super(props);
      this.state = {
          newNote:{},
          editOrder:{},
       };
   }

   onSubmit =(e)=>{
     e.preventDefault();
     let {newNote}= this.state;
     this.props.fastNoteActions.newFastNote(newNote);
     this.props.close();
     console.log(newNote)
   }
   onChange = (e) => {
       let {newNote} = this.state;
       newNote[e.target.name] = e.target.value;
       this.setState({newNote});
       console.log(newNote)
   };


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
        onClick={this.onSubmit}
      />,
    ];
    return (
          <Dialog
            title="Notas"
            modal={false}
            open={this.props.open}
            contentStyle={modStyle}
            actions={actions}
            bodyStyle={{backgroundColor:'#FFFFA5'}}
            titleStyle={{backgroundColor:'#FFFFA5'}}
            actionsContainerStyle={{backgroundColor:'#FFFFA5'}}

            onRequestClose={this.props.close}
          >
            <TextField
              style={{textAlign:'start'}}
              name='text'
              required
              floatingLabelText="Escribe tu idea"
              multiLine={true}
              underlineStyle={{display :  ' none '}}
              onChange={this.onChange}
              rows={2}
            />
          </Dialog>
    );
  }
}

var modStyle={
  width:'25%',
  minWidth: '250px',
}
function mapStateToProps(state, ownProps) {

     return {
        fastnote: state.fastnote.list,
     }

}
function mapDispatchToProps(dispatch) {
    return{
        fastNoteActions:bindActionCreators(fastNoteActions,dispatch),
    }
}

NewFastNote = connect(mapStateToProps, mapDispatchToProps)(NewFastNote);

export default NewFastNote;
