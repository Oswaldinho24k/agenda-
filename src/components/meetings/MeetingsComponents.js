import React from 'react';
import './meetings.css';
import MeetingsListUser from './MeetingsListUser';
import TabsComponents from './TabsComponents';

const MeetingsComponents = ({onChange,employees,onSubmit,addEmployes,employessListAdd,meeting,openListAdd,listAddEmp, addParticipants,openNewTask,openNewProject,tasks} ) => (
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
          employees={employees}
          openNewTask={openNewTask}
          tasks={tasks}
          openNewProject={openNewProject}
          onSubmit={onSubmit}
          onChange={onChange}
          />
    </div>
  </div>
);


export default MeetingsComponents;
