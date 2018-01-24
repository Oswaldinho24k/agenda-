import React from 'react';
import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Security from 'material-ui/svg-icons/hardware/security';
import Edit from 'material-ui/svg-icons/action/account-box';
import './Profile.css'
const cardAvatar={
    marginTop:20
};

const CardExampleWithAvatar = ({openPass,openEdit,full_name,user,address,phone_number,avatar}) => (

  <div>
      <Card className="cardProfile">
        <div className="cardAvatar">
            <Avatar size={150} style={cardAvatar} src={avatar}/>
            <span className="textTitle">{user.username}</span>
            <span className="textTitle">{user.email}</span>
        </div>
      </Card>

      <Card className="cardProfile">
        <div className="title">
          <span className="Title">User information</span>
        </div>

        <div className="ProfileData">
            <label className="labelProfile"htmlFor="">Full Name</label>
              <span className="textdata">{full_name}</span>
              <label className="labelProfile"htmlFor="">Address</label>
              <span className="textdata">{address}</span>
            <label className="labelProfile"htmlFor="">Phone Number </label>
              <span className="textdata">{phone_number}</span>
        </div>
      </Card>

      <Card className="cardProfile">
          <FlatButton onClick={openPass} style={styles.btn} fullWidth={true} icon={<Security/>} label='Change password'/>
      </Card>
      <Card className="cardProfile">
          <FlatButton onClick={openEdit} fullWidth={true} icon={<Edit/>} label='Edit profile'/>
      </Card>
  </div>

);

const styles = {
  Inputs:{
    marginLeft:'25px',
    heigth:'61px',
  },
  floatingLabelStyle: {
    color: 'blue',
  },
  floatingLabelFocusStyle: {
    color: 'red'
  },
  underlineStyle: {
  borderColor: 'white',
},
btn:{

  alignItems:'flex-start'
}
};

export default CardExampleWithAvatar;
