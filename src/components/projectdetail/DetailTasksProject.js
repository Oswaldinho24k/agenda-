import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import Avatar from 'material-ui/Avatar';


const styles = {
    paper: {
      width:'42%',
      minWidth:'320px',
      maxHeight:'500px',
      overflow:'auto',
      marginTop:'10px'
    },
    btn:{
      textAlign:'right',
      bottom:'0'
    },
    title:{
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start'
    },
    avatarHeader:{
      display:'flex',
      flexDirection:'row-reverse',
      top:'7px'
    }
};



const DetailTasksProject = () => (

      <Card style={styles.paper}>
          <div className="detailTasksHeader">
            <CardTitle style={styles.title} title="Nombre de la tarea" subtitle="Tarea"/>
              <CardHeader
                style={styles.avatarHeader}
                textStyle={{paddingRight: '10px'}}
                title="Encargado"
                subtitle="Root"
                avatar='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-kayn-reveal/es_MX/94dcc05587bfb7cf3b581917f3dd6662df5eb212/assets/img/base-wallpaper.jpg'
              />
          </div>
            <CardText>
              <div className="detailTasks">
                  <div className='detailDateTasks'>
                      <TextField
                        name="status"
                        disabled={true}
                        defaultValue='Realizada'
                        underlineDisabledStyle={{display :  ' none '}}
                        floatingLabelText="Status"
                      />
                      <TextField
                        name="priority"
                        disabled={true}
                        defaultValue='Alta'
                        underlineDisabledStyle={{display :  ' none '}}
                        floatingLabelText="Prioridad"
                      />
                  </div>
                  <div className='detailDateTasks'>
                      <TextField
                        disabled={true}
                        name="fecha_inicio"
                        disabled={true}
                        defaultValue='10-01-2005'
                        underlineDisabledStyle={{display :  ' none '}}
                        floatingLabelText="Fecha de Inicio"
                      />
                      <TextField
                        disabled={true}
                        name="fecha_termino"
                        disabled={true}
                        defaultValue='12-01-2005'
                        underlineDisabledStyle={{display :  ' none '}}
                        floatingLabelText="Fecha de Termino"
                      />
                  </div>
                  <TextField
                    defaultValue="Bañar al perro es una tarea muy difcil por lo cual alguien debe hacerlo"
                    floatingLabelText="Descripción"
                    multiLine={true}
                    rows={2}
                    disabled={true}
                    underlineDisabledStyle={{display :  ' none '}}
                  />
              </div>
            </CardText>
      </Card>
);

export default DetailTasksProject;

// <Paper style={styles.paper}  zDepth={1}>
//           <Tabs inkBarStyle={{backgroundColor:'white'}}>
//                 <Tab label="Tareas" style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264"}}>
//                   <div className="muro">
//                     <div className="Btns">
//                       <RaisedButton
//                         primary={true}
//                         label="Nueva Tareas"
//                         />
//                     </div>
//
//                   </div>
//                 </Tab>
//                 <Tab label="Acuerdos" style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264", borderLeft:"1px dotted #6bb8c1", borderRight:"1px dotted #6bb8c1"}}>
//                   <div className="muro">
//                     <div className="Btns">
//                       <RaisedButton
//                         primary={true}
//                         label="Nuevo Acuerdo"
//                         />
//                    </div>
//                   </div>
//                 </Tab>
//                 <Tab
//                     label="Archivos"
//                     data-route="/home"
//                     style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264", borderLeft:"1px dotted #6bb8c1"}}
//                 >
//                   <div className="muro">
//                     <div className="Btns">
//                       <RaisedButton
//                         primary={true}
//                         label="Nuevo Archivo"
//                         />
//                    </div>
//                   </div>
//                 </Tab>
//               </Tabs>
//     </Paper>
