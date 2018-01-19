import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ErrorIcon from 'material-ui/svg-icons/alert/error-outline';

const RegisterComponents =({onChange,onSubmit,cancel,passNo,error})=>{

  return (

        <form
          className="form"
          onSubmit={onSubmit}
          >
          {passNo===true ?<h2>{error}</h2>:null}

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
             <label htmlFor="">
                 <input
                   name="password"
                   required
                   onChange={onChange}
                   placeholder="Password"
                   type="password"
                   />
             </label>
             <label htmlFor="">
                 <input
                   name="password2"
                   required
                   onChange={onChange}
                   placeholder="Confirm password"
                   type="password"
                   />
                 {passNo===true ?<ErrorIcon style={{color:'red', marginLeft:'-29px',marginTop:'10px'}} />:null}
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
