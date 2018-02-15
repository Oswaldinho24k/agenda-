import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import RaisedButton from 'material-ui/RaisedButton';
import Camera from 'material-ui/svg-icons/image/camera-alt';

let elinput;
function clickin(){
  elinput.click();
  console.log(elinput)
}
const ProfileData = ({name,phone,address,edit,onChange,cancel,uploadPhoto}) => (
  <div>
    <TextField
      className="InputsData"
      hintText="Full Name"
      onChange={onChange}
      disabled={edit}
       name="full_name"
      defaultValue={name}
      underlineStyle={{display :  ' none '}}
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
    <div className="Buttons">
      <RaisedButton
        label="Choose Avatar"
        labelPosition="before"
        primary={true}
        icon={<Camera />}
        onClick={clickin}
      />
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
    <label htmlFor="">
        <input
          ref={input=>elinput=input}
          name="avatar"
          hidden
          onChange={uploadPhoto}
          type="file"
          id="upload"
          accept="image/*"
          />
    </label>
  </div>}
  </div>
);

export default ProfileData;
