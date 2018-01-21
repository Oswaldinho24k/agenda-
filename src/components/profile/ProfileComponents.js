import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Security from 'material-ui/svg-icons/hardware/security';
import Edit from 'material-ui/svg-icons/action/account-box';
import './Profile.css'
const cardAvatar={
    marginTop:20
};
const CardExampleWithAvatar = ({user,openPass}) => (
  <div>
      <Card className="cardProfile">
        <div className="cardAvatar">
            <Avatar size={150} style={cardAvatar} src="http://www.lol-wallpapers.com/wp-content/uploads/2017/01/Vi-Concept-Art-2-League-of-Legends-Artwork-Wallpaper-lol.jpg"/>
            <span className="textTitle">{user.username}</span>
            <span className="textTitle">{user.email}</span>
        </div>
      </Card>

      <Card className="cardProfile">
        <div className="title">
          <span className="textTitle">User information</span>
        </div>

        <form>
          <TextField
            disabled={true}
            style={styles.Inputs}
            value="Brenda Ortega"
            underlineDisabledStyle={ styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelText="Full Name"
          /><br />
          <TextField
            disabled={true}
            style={styles.Inputs}
            value="tulancingo"
            underlineDisabledStyle={ styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelText="Address"
          /><br />
          <TextField
            disabled={true}
            style={styles.Inputs}
            value="7754567897"
            floatingLabelStyle={styles.floatingLabelStyle}
            underlineDisabledStyle={ styles.underlineStyle}
            floatingLabelText="Phone Number"
          /><br />
        </form>
      </Card>

      <Card className="cardProfile">
          <FlatButton onClick={openPass} style={styles.btn} fullWidth={true} icon={<Security/>} label='Change password'/>
      </Card>
      <Card className="cardProfile">
          <FlatButton  fullWidth={true} icon={<Edit/>} label='Edit profile'/>
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
