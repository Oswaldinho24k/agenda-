import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';


const NewMeetingComponents =({cancel,onChange,onSubmit,onChangeDate})=>{

  return (
        <form
          className="form"
          onSubmit={onSubmit}
          >
          <TextField
            name='name'
            onChange={onChange}
            required
            floatingLabelText="Nombre de la Reunion"
          />
          <DatePicker
            name='meeting_date'
            onChange={onChangeDate}
            required
            floatingLabelText="Fecha de la Reunion"/>
             <div className="btnMod">
               <FlatButton
                 label="Cancelar"
                 primary={true}
                 onClick={cancel}
               />
               <FlatButton
                 label="Aceptar"
                 primary={true}
                 type='submit'
               />
             </div>
         </form>
  );

}

export default NewMeetingComponents;
