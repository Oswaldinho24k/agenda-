import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
const ChangePassword =({cancel,onChange,onSubmit,passNo,error})=>{

  return (
    <div>
      <article>

        {passNo===true ?<span style={{color:'red'}}>Error: {error}</span>:<span>Note: Please complete all fields</span>}
      </article>
      <form
        className="form"
        onSubmit={onSubmit}
        >
        <TextField
            floatingLabelText="Password"
            name="new_password1"
            required
            type="password"
            onChange={onChange}
          />
          <TextField
              floatingLabelText="Confirm password"
              onChange={onChange}
              name="new_password2"
              required
              type="password"
            /><br/>

           <div className="btnMod">
             <FlatButton
               label="Cancel"
               primary={true}
               onClick={cancel}
             />
             <FlatButton
               label="Confirm"
               primary={true}
               type='submit'
             />
           </div>
       </form>

    </div>

  );

}

export default ChangePassword;
