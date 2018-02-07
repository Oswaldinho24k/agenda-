import React from 'react';
import './meetings.css';
import MeetingsListUser from './MeetingsListUser';
import TabsComponents from './TabsComponents';

const MeetingsComponents = ({employees,addEmployes,employessListAdd,meeting,openListAdd,listAddEmp, addParticipants,openNewTask,openNewProject} ) => (
  <div>
    <div className="meetings-container">
        <MeetingsListUser
          employessListAdd={employessListAdd}
          employees={employees}
          addEmployes={addEmployes}
          meeting={meeting}
          openListAdd={openListAdd}
          listAddEmp={listAddEmp}
          addParticipants={addParticipants}
          />
        <TabsComponents
          openNewTask={openNewTask}
          openNewProject={openNewProject}
          />
    </div>
  </div>
);


export default MeetingsComponents;
