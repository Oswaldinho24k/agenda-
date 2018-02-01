import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
    paper: {
      width:'45%',
      margin: '3% auto',
      height:'500px'

    }
};


const TabsComponents = () => (
  <Paper style={styles.paper}  zDepth={1}>
            <Tabs inkBarStyle={{backgroundColor:'white'}}>
                  <Tab label="Tareas" style={{backgroundColor:"white", borderBottom:"2px solid #87316C", color:"#5f6264"}}>
                      Hola Mundo
                  </Tab>
                  <Tab label="Acuerdos" style={{backgroundColor:"white", borderBottom:"2px solid #87316C", color:"#5f6264", borderLeft:"1px dotted #87316C", borderRight:"1px dotted #87316C"}}>
                    asda
                  </Tab>
                  <Tab
                      label="Archivos"
                      data-route="/home"

                      style={{backgroundColor:"white", borderBottom:"2px solid #87316C", color:"#5f6264", borderLeft:"1px dotted #87316C", borderRight:"1px dotted #87316C"}}
                  >
                    Mhola mun
                  </Tab>

                </Tabs>
      </Paper>
);

export default TabsComponents;
