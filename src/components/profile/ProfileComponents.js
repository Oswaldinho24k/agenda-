import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import './Profile.css'
const cardAvatar={
    marginTop:20
};
const CardExampleWithAvatar = ({user}) => (
  <div>
      <Card className="cardProfile">
        <div className="cardAvatar">
            <Avatar size={150} style={cardAvatar} src="http://www.lol-wallpapers.com/wp-content/uploads/2017/01/Vi-Concept-Art-2-League-of-Legends-Artwork-Wallpaper-lol.jpg"/>
            <span className="textTitle">{user.username}</span>
            <span className="textTitle">{user.email}</span>
        </div>
      </Card>

      <Card className="cardProfile">
        <CardTitle className='title' title={<span className="textTitle">User information</span>}/>
        <form>
          <TextField
            floatingLabelText="Full Name"
          /><br />
          <TextField
            floatingLabelText="Address"
          /><br />
          <TextField
            floatingLabelText="Phone Number"
          /><br />
        </form>
      </Card>
  </div>

);

export default CardExampleWithAvatar;
