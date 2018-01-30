import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const RegisterComponents =({onChange,onSubmit,cancel})=>{

  return (

        <form
          className="form"
          onSubmit={onSubmit}
          >

             <label htmlFor="">
                 <input
                   name="username"
                   required
                   onChange={onChange}
                   placeholder="Username"
                   type="text" />
             </label>
             <label htmlFor="">
                 <input
                   name="email"
                   required
                   onChange={onChange}
                   placeholder="Email"
                   type="email"
                   />
             </label>
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
