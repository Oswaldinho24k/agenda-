import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ErrorIcon from 'material-ui/svg-icons/alert/error-outline';

const EditProfileComponents =()=>{

  return (

        <form
          className="form"
          >

             <label htmlFor="">
                 <input
                   name="full_name"
                   required
                   placeholder="Full Name"
                   type="text" />
             </label>
             <label htmlFor="">
                 <input
                   name="address"
                   required
                   placeholder="Address"
                   type="text"
                   />
             </label>
             <label htmlFor="">
                 <input
                   name="phone_number"
                   required
                   placeholder="Phone Number"
                   type="number"
                   />
             </label>
             <div className="btnMod">
               <FlatButton
                 label="Cancel"
                 primary={true}
               />
               <FlatButton
                 label="Save"
                 primary={true}
                 type='submit'
               />
             </div>
         </form>
  );

}

export default EditProfileComponents;
