import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import './employees.css'
import Divider from 'material-ui/Divider';

const CardExampleWithAvatar = ({user,full_name,address,phone_number,avatar}) => (
  <div>
    <div className="Header">
      <div className="conteDetail">
        <div className='avatarDetail'>
          <Avatar size={125} src={avatar}/>
        </div>
          <section className="detailInfo">
            <CardTitle className="detailTitle" title={user.username} subtitle={user.email} />
            <div className="detailData">
              <section className="detailData1">
                  <label className="labelProfile"htmlFor="">Name:</label>
                    <span className="textdata">{full_name}</span>
                    <label className="labelProfile"htmlFor="">Address</label>
                    <span className="textdata">{address}</span>
              </section>
              <section className="detailData1">
                  <label className="labelProfile"htmlFor="">Phone Number </label>
                  <span className="textdata">{phone_number}</span>
              </section>
            </div>
        </section>
        <Divider />
      </div>
    </div>
    <section>
        Aqui va el contenido
    </section>
  </div>
);

export default CardExampleWithAvatar;
