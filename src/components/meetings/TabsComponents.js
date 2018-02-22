import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import NewTask from './NewTask';
import Divider from 'material-ui/Divider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
    paper: {
      width:'70%',
      margin: '3px auto',
      maxHeight:'500px'

    },
    btn:{
      textAlign:'right',
      bottom:'0'
    },
};




const TabsComponents = ({isStaff,changeDateFinish,changeDateStart,onDate,addPriority,onChange,onSubmit,openNewTask,employees,tasks,onDelete,addPerson}) => (
  <Paper style={styles.paper}  zDepth={1}>
            <Tabs inkBarStyle={{backgroundColor:'white'}}>
                  <Tab label="Tareas" style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264"}}>
                    <div className="muro">
                      <NewTask
                          employees={employees}
                          tasks={tasks}
                          onDelete={onDelete}
                          addPerson={addPerson}
                          addPriority={addPriority}
                          changeDateStart={changeDateStart}
                          changeDateFinish={changeDateFinish}
                          onDate={onDate}
                          isStaff={isStaff}
                        />
                       <Divider/>
                       {isStaff ?<form
                         onSubmit={onSubmit}
                         >
                         <div class="search">
                            <input required onChange={onChange} name="name" type="text" class="searchTerm" placeholder="New Tasks"/>
                              <RaisedButton
                                primary={true}
                               icon={<ContentAdd />}
                               type='submit'
                             />
                         </div>
                       </form>:null}
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
