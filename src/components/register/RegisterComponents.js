import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


const RegisterComponents =({onChange,onSubmit,cancel})=>{

  return (

        <form
          className="form"
          onSubmit={onSubmit}
          >
          <TextField
              floatingLabelText="Nombre de usuario"
              name="username"
              required
              onChange={onChange}
            />
            <TextField
                floatingLabelText="Email"
                name="email"
                required
                onChange={onChange}
                type="email"
              />
             <div className="btnMod">
                 <FlatButton
                   label="Cancel"
                   primary={true}
                   onClick={cancel}
                 />
                 <FlatButton
                   label="Signup"
                   primary={true}
                   type='submit'
                 />
             </div>
         </form>
  );

}

export default RegisterComponents;
