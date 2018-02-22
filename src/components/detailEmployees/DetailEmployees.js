import React from 'react';
import {CardText} from 'material-ui/Card';
import './employees.css';
import BasicInfo from './BasicInfo';
import TabsComponents from  './TabsComponents';

const CardExampleWithAvatar = ({avatar,user,full_name,phone_number,address,tasks}) => (
  <div>
    <div className="perfil-container">
      <CardText
           style={
               {
                   position: 'relative',
                   textAlign:"center",
                   background:"url('http://movilarena.com/wp-content/uploads/todo_list.jpg')",
                   backgroundSize: 'cover',
                   padding:0,
               }}>
           <div
               style={
                   {
                       backgroundColor: 'rgba(0, 0, 0, 0.2)',
                       padding: 55, color:"white"
                   }}>
               <img style={styles.image} src={avatar} alt="user pic"/>
               <h2 className="DetailUserName">{user.username}</h2>
           </div>
       </CardText>
        <BasicInfo
            name={full_name}
            phone={phone_number}
            user={user}
            address={address}
           />
            <TabsComponents
              tasks={tasks}
              />
    </div>
  </div>
);
const styles = {
    image:{
        borderRadius:"50%",
        width:"200px",
        height: "200px",
        border: '5px solid white'
    },
    botonFlotante:{
        position:"absolute",
        bottom:"5px",
        right:"5px",
        background: "white",

    }
};

export default CardExampleWithAvatar;

/*



*/
