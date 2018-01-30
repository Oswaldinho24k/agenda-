import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const ProfileData = ({name,phone,address,edit,onChange,cancel,uploadPhoto}) => (
  <div>
    <TextField
      className="InputsData"
      hintText="Full Name"
      onChange={onChange}
      disabled={edit}
       name="full_name"
      defaultValue={name}
      underlineDisabledStyle={{display :  ' none '}}
      floatingLabelText="Name"
    /><br />
    <TextField
      className="InputsData"
      disabled={edit}
       name="address"
      onChange={onChange}
      defaultValue={address}
      underlineDisabledStyle={{display :  ' none '}}
      floatingLabelText="Address"
    /><br />
    <TextField
      className="InputsData"
      name="phone_number"
      disabled={edit}
      onChange={onChange}
      defaultValue={phone}
      underlineDisabledStyle={{display :  ' none '}}
      floatingLabelText="phone_number"
    />
  {edit !== false ?null:
    <div>
    <br/>
      <label htmlFor="">
          <input
            name="avatar"
            onChange={uploadPhoto}
            type="file"
            id="upload"
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
        label="accept"
        primary={true}
        type='submit'
      />
    </div>
  </div>}
  </div>
);

export default ProfileData;
