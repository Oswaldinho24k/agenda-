import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import TableTask from './TableTask';
import FileMeeting from './FileMeeting'
import Divider from 'material-ui/Divider';
import Files from 'material-ui/svg-icons/file/attachment';
import Done from 'material-ui/svg-icons/action/done';
import ImmediateAction from './ImmediateAction';
import NoteMeeting from './NoteMeeting'

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



let elinput;
function clickin(){
  elinput.click();
  console.log(elinput)
}
const TabsComponents = ({archivo,addPersonAction,onDeleteAction,onChangeAction,onSubmitAction,immediate,onDeleteFile,
                         onChangeFile,files,uploadFile,isStaff,changeDateFinish,openNote,meeting,
                         changeDateStart,onDate,addPriority,onChange,onSubmit,onSubmitFile,openNewTask,userAll,tasks,onDelete,addPerson, notes, onDeleteNote}) => (
  <Paper style={styles.paper}  zDepth={1}>
            <Tabs inkBarStyle={{backgroundColor:'white'}}>
                  <Tab
                      label="Acciones Inmediatas"
                      data-route="/home"
                      style={{backgroundColor:"white", borderBottom:"2px solid #63a2f1", color:"#5f6264"}}
                  >
                    <div className="muro">
                      <ImmediateAction isStaff={isStaff} userAll={userAll} immediate={immediate} onDeleteAction={onDeleteAction} addPersonAction={addPersonAction} meeting={meeting}/>
                        {isStaff ?<form
                          onSubmit={onSubmitAction}
                          >
                          <div className="search">
                             <input required  name="text" type="text" onChange={onChangeAction} className="taskTerm" placeholder="Nueva accion"/>
                               <RaisedButton
                                 primary={true}
                                icon={<ContentAdd />}
                                type='submit'
                              />
                          </div>
                        </form>:null}
                    </div>
                  </Tab>
                  <Tab label="Compromisos" style={{backgroundColor:"white",borderLeft:"1px dotted #63a2f1", borderBottom:"2px solid #63a2f1", color:"#5f6264"}}>
                    <div className="muro">
                      <TableTask
                          userAll={userAll}
                          tasks={tasks}
                          onDelete={onDelete}
                          addPerson={addPerson}
                          addPriority={addPriority}
                          changeDateStart={changeDateStart}
                          changeDateFinish={changeDateFinish}
                          onDate={onDate}
                          meeting={meeting}
                          isStaff={isStaff}
                        />
                       <Divider/>
                       {isStaff ?<form
                         onSubmit={onSubmit}
                         >
                         <div className="search">
                            <input required onChange={onChange} name="name" type="text" className="taskTerm" placeholder="Nueva tarea"/>
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
                      style={{backgroundColor:"white", borderBottom:"2px solid #63a2f1", color:"#5f6264", borderLeft:"1px dotted #63a2f1"}}
                  >
                    <div className="muro">
                      <FileMeeting files={files} isStaff={isStaff} onDeleteFile={onDeleteFile} />
                        {isStaff?<form onSubmit={onSubmitFile}>
                          <div className="search">
                             <input required onChange={onChangeFile} name="name_file" type="text" className="fileTerm" placeholder="Nombre del Archivo"/>
                             <input required type="file"   onChange={uploadFile}   ref={input=>elinput=input}   name="file" hidden id="upload"/>
                               <RaisedButton
                                 labelPosition="before"
                                 primary={archivo.files == undefined? true:false}
                                 backgroundColor={archivo.files? "#a4c639":false}
                                 icon={archivo.files == undefined? <Files />:<Done color={'white'}/>}
                                 onClick={clickin}
                               />
                               <RaisedButton
                                 primary={true}
                                 disabled={archivo.files == undefined? true:false}
                                 label="subir"
                                type='submit'
                              />
                          </div>
                        </form>:null}
                    </div>
                  </Tab>
                  <Tab
                      label="Notas"
                      data-route="/home"
                      style={{backgroundColor:"white", borderBottom:"2px solid #63a2f1", color:"#5f6264", borderLeft:"1px dotted #63a2f1"}}
                  >
                    <div className="muro">
                      <NoteMeeting noteMe={notes}  isStaff={isStaff} onDeleteNote={onDeleteNote} openNote={openNote} meeting={meeting}/>
                    </div>
                  </Tab>
                </Tabs>
      </Paper>
);

export default TabsComponents;
