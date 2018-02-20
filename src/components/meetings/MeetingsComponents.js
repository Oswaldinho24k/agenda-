import React from 'react';
import './meetings.css';
import MeetingsListUser from './MeetingsListUser';
import TabsComponents from './TabsComponents';

const MeetingsComponents = ({valuePerson,onChangePerson,addPerson,onDelete, onChange,employees,onSubmit,addEmployes,employessListAdd,meeting,openListAdd,listAddEmp, addParticipants,openNewTask,openNewProject,tasks} ) => (
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
          tasks={tasks}
          openNewProject={openNewProject}
          onSubmit={onSubmit}
          onChange={onChange}
          onDelete={onDelete}
          addPerson={addPerson}
          onChangePerson={onChangePerson}
          valuePerson={valuePerson}
          />
    </div>
  </div>
);


export default MeetingsComponents;
