import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const EditProfileComponents =({cancel,user})=>{

  return (
    <div>
      <article>
        <span>Note: Please complete all fields</span>
      </article>
      <form
        className="form"
        >
             <label htmlFor="">
                 <input
                   name="user"
                   required
                   value={user.username}
                   placeholder="username"
                   type="text"
                   />
             </label>
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
           <label htmlFor="">
               <input
                 name="avatar"
                 required
                 type="file"
                 accept="image/*"
                 />
           </label>
           <div className="btnMod">
             <FlatButton
               label="Cancel"
               primary={true}
               onClick={cancel}
             />
             <FlatButton
               label="Save"
               primary={true}
               type='submit'
             />
           </div>
       </form>

    </div>

  );

}

export default EditProfileComponents;
