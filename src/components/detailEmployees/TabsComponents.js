import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import TaskEmployees from './TaskEmployees';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
    paper: {
      width:'100%',
      margin: '4% auto',


    }
};


const TabsComponents = ({tasks}) => (
  <Paper style={styles.paper}  zDepth={1}>
            <Tabs inkBarStyle={{backgroundColor:'white'}}>
                  <Tab label="Tareas" style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264"}}>
                      <TaskEmployees
                          tasks={tasks}
                        />
                  </Tab>
                  <Tab label="Proyectos"   style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264"}}>
                    asda
                  </Tab>
                </Tabs>
      </Paper>
);

export default TabsComponents;
