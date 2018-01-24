import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ErrorIcon from 'material-ui/svg-icons/alert/error-outline';
import Card from 'material-ui/Card';

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

           <label htmlFor="">
               <input
                 name="new_password1"
                 required
                 placeholder="Password"
                 type="password"
                 onChange={onChange}
                 />
           </label>
           <label htmlFor="">
               <input
                 onChange={onChange}
                 name="new_password2"
                 required
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
