import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import './employees.css'
import Divider from 'material-ui/Divider';

const CardExampleWithAvatar = ({user,full_name,address,phone_number,avatar}) => (

          <section>

            <span>{user.username} </span><br/>
            <span>{user.email}</span>

                <div  style={{display:'flex', flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
                  <label className="labelProfile"htmlFor="">Name: {full_name}</label>

                    <label className="labelProfile"htmlFor="">Address</label>
                    <span className="textdata">{address}</span>
                    </div>
<div  style={{display:'flex', flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>

                  <label className="labelProfile"htmlFor="">Phone Number </label>
                  <span className="textdata">{phone_number}</span>
                </div>



        </section>

);

export default CardExampleWithAvatar;

// <section>
//
//   <p>{user.username} </p>
//   <span>{user.email}</span>
//   <div className="detailData">
//     <section className="detailData1">
//         <label className="labelProfile"htmlFor="">Name:</label>
//           <span className="textdata">{full_name}</span>
//           <label className="labelProfile"htmlFor="">Address</label>
//           <span className="textdata">{address}</span>
//     </section>
//     <section className="detailData1">
//         <label className="labelProfile"htmlFor="">Phone Number </label>
//         <span className="textdata">{phone_number}</span>
//     </section>
//   </div>
// </section>
//
