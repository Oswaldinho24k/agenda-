import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Security from 'material-ui/svg-icons/hardware/security';
import Edit from 'material-ui/svg-icons/action/account-box';
import ProfileData from './ProfileData';
import './Profile.css'





const ProfileComponents = ({openClosePassword,onChange,onSubmit,openPass,activeEdit,user,avatar,full_name,phone_number,address,edit,uploadPhoto,imagePreviewUrl}) => (

  <form
    onSubmit={onSubmit}
    >
    <div className="coverphoto">
      <div className="profile_avatar" >
        {imagePreviewUrl ? <Avatar size={130} src={imagePreviewUrl}   />:
        <Avatar id="img"  size={130} src={avatar}/>}
      </div>
    </div>

      <div className="conteProfile">
          <div className="left_colBottons">
              <FlatButton onClick={openClosePassword} style={{textAlign:'left', marginBottom:'10px'}} labelStyle={{fontSize:'9px'}} fullWidth={true} icon={<Security/>} label='Change password'/>
              <FlatButton onClick={activeEdit} style={{textAlign:'left'}} labelStyle={{fontSize:'10px'}}  fullWidth={true} icon={<Edit/>} label='Edit profile'/>
          </div>
          <div className="right_colData">
            <span className="usernameProfil">{user.username}</span><br/>
            <span className="userEmail">{user.email}</span>
            <ProfileData
              edit={edit}
              cancel={activeEdit}
              name={full_name}
              phone={phone_number}
              address={address}
              onChange={onChange}
              uploadPhoto={uploadPhoto}
              />
          </div>
        </div>
      </form>



);


export default ProfileComponents;
