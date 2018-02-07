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
            floatingLabelText="Name of the meeting"
          />
          <DatePicker
            name='meeting_date'
            onChange={onChangeDate}
            required
            floatingLabelText="Meeting date"/>
             <div className="btnMod">
               <FlatButton
                 label="Cancel"
                 primary={true}
                 onClick={cancel}
               />
               <FlatButton
                 label="Next"
                 primary={true}
                 type='submit'
               />
             </div>
         </form>
  );

}

export default NewMeetingComponents;
