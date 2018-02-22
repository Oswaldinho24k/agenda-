import React from 'react';
import './meetings.css';
import MeetingsListUser from './MeetingsListUser';
import TabsComponents from './TabsComponents';

const MeetingsComponents = ({is_staff,onDate,changeDateStart,changeDateFinish,addPriority,addPerson,onDelete, onChange,employees,onSubmit,addEmployes,employessListAdd,meeting,openListAdd,listAddEmp, addParticipants,openNewTask,openNewProject,tasks} ) => (
  <div className="meeting_box">
    <div className="meetings-container">
        <MeetingsListUser
          employessListAdd={employessListAdd}
          employees={employees}
          addEmployes={addEmployes}
          meeting={meeting}
          openListAdd={openListAdd}
          listAddEmp={listAddEmp}
          isStaff={is_staff}
          addParticipants={addParticipants}

          />
        <TabsComponents
          isStaff={is_staff}
          employees={employees}
          tasks={tasks}
          openNewProject={openNewProject}
          onSubmit={onSubmit}
          onChange={onChange}
          onDelete={onDelete}
          addPerson={addPerson}
          addPriority={addPriority}
          changeDateStart={changeDateStart}
          onDate={onDate}
          changeDateFinish={changeDateFinish}
          />
    </div>
  </div>
);


export default MeetingsComponents;
