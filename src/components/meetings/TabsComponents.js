import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
    paper: {
      width:'50%',
      margin: '3px auto',
      maxHeight:'500px'

    },
    btn:{
      textAlign:'right',
      bottom:'0'
    },
};

// <div style={styles.btn}>
//   <FloatingActionButton mini={true}>
//     <ContentAdd />
//   </FloatingActionButton>
// </div>


const TabsComponents = ({openNewTask,openNewProject}) => (
  <Paper style={styles.paper}  zDepth={1}>
            <Tabs inkBarStyle={{backgroundColor:'white'}}>
                  <Tab label="Tareas" style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264"}}>
                    <div className="muro">
                      <div className="Btns">
                        <RaisedButton
                          primary={true}
                          label="Nueva Tareas"
                          onClick={openNewTask}
                          />
                      </div>

                    </div>
                  </Tab>
                  <Tab label="Proyecto" style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264", borderLeft:"1px dotted #6bb8c1", borderRight:"1px dotted #6bb8c1"}}>
                    <div className="muro">
                      <div className="Btns">
                        <RaisedButton
                          primary={true}
                          label="Nuevo Proyecto"
                          onClick={openNewProject}
                          />
                     </div>
                    </div>
                  </Tab>
                  <Tab
                      label="Archivos"
                      data-route="/home"
                      style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264", borderLeft:"1px dotted #6bb8c1"}}
                  >
                    <div className="muro">
                      <div className="Btns">
                        <RaisedButton
                          primary={true}
                          label="Nuevo Archivo"
                          />
                     </div>
                    </div>
                  </Tab>
                </Tabs>
      </Paper>
);

export default TabsComponents;
