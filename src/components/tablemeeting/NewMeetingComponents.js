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
            floatingLabelText="Nombre de la Reunión"
          />
          <DatePicker
            name='meeting_date'
            onChange={onChangeDate}
            required
            floatingLabelText="Fecha de la Reunión"/>
             <div className="btnMod">
               <FlatButton
                 label="Cancelar"
                 primary={false}
                 style={{color:"rgb(244, 134, 135)"}}
                 onClick={cancel}
               />
               <FlatButton
                 label="Aceptar"
                 primary={false}
                 style={{color:"rgb(244, 134, 135)"}}
                 type='submit'
               />
             </div>
         </form>
  );

}

export default NewMeetingComponents;
