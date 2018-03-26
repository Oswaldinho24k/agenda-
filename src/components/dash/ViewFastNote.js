import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fastNoteActions from '../../redux/actions/fastNoteActions';
import DeleteFastNote from './DeleteFastNote'


 class ViewFastNote extends React.Component {
 constructor(props) {
    super(props);
      this.state = {
          newNote:{},
          editOrder:{},
          edit:true,
          DelFast:false,
       };
   }

   onSubmit =(e)=>{
     e.preventDefault();
     let {newNote}= this.state;
     this.props.fastNoteActions.editFastNote(newNote);
     this.setState({edit:true})
     console.log(newNote)
   }
   onChange = (e) => {
      let data=this.props.data
       let {newNote} = this.state;
       data[e.target.name] = e.target.value;
       this.setState({newNote:data});
   };
   onEdit=()=>{
     let {edit}= this.state;
     edit = !edit
     this.setState({edit})
   }
   cancel=()=>{
     this.onEdit()
   }
   openDelete=()=>{
      let {DelFast}=this.state;
      DelFast = !DelFast;
      this.setState({DelFast})
   }
   onDelete=()=>{
    let id=this.props.data.id
    this.props.fastNoteActions.deleteFastNote(id);
    console.log("Voy a eliminar id:",id)
    this.openDelete()
    this.props.close()
   };


  render() {
    const actions = [
      <FlatButton
        label="Eliminar"
        primary={true}
        onClick={this.openDelete}

      />,
      <FlatButton
        label="Cerrar"
        primary={true}
        onClick={this.props.close}
      />,
      <FlatButton
        label="Editar"
        primary={true}
        onClick={this.onEdit}
      />
    ];
    const activeEdit=[
      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.cancel}

      />,
      <FlatButton
        label="Guardar"
        primary={true}
        onClick={this.onSubmit}

      />,
    ];
          let edit = this.state.edit;
          let data = this.props.data;
    return (

          <Dialog
            title="Notas"
            modal={false}
            open={this.props.open}
            contentStyle={modStyle}
            bodyStyle={{backgroundColor:'#FFFFA5'}}
            titleStyle={{backgroundColor:'#FFFFA5'}}
            actionsContainerStyle={{backgroundColor:'#FFFFA5'}}
            actions={edit ?actions:activeEdit}
            onRequestClose={this.props.close}
          >
            <TextField
              style={{textAlign:'start'}}
              name='text'
              defaultValue={data===undefined?"":data.text}
              disabled={edit}
              underlineDisabledStyle={{display :  ' none '}}
              underlineStyle={{display :  ' none '}}
              required
              onChange={this.onChange}
              floatingLabelText="Esto pensaste"
              multiLine={true}
              rows={2}
            />
            <DeleteFastNote open={this.state.DelFast} close={this.openDelete} confirmDelete={this.onDelete}/>
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

ViewFastNote = connect(mapStateToProps, mapDispatchToProps)(ViewFastNote);

export default ViewFastNote;
