import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const EditProfileComponents =({cancel,onChange,onSubmit,full_name,address,phone_number,uploadPhoto})=>{

  return (
    <div>
      <article>
        <span>Note: Please complete all fields</span>
      </article>
      <form
        className="form"
        onSubmit={onSubmit}
        >


             <label htmlFor="">
               <input
                 name="full_name"
                 onChange={onChange}
                 defaultValue={full_name}
                 placeholder="Full name"
                 type="text" />
             </label>
           <label htmlFor="">
               <input
                 name="address"
                 onChange={onChange}
                 defaultValue={address}
                 placeholder="Address"
                 type="text"
                 />
           </label>
           <label htmlFor="">
               <input
                 name="phone_number"
                 defaultValue={phone_number}
                 onChange={onChange}
                 placeholder="Phone Number"
                 type="number"
                 />
           </label>
           <label htmlFor="">
               <input
                 name="avatar"
                 onChange={uploadPhoto}
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
