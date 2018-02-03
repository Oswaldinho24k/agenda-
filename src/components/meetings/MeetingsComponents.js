import React from 'react';
import './meetings.css';
import MeetingsListUser from './MeetingsListUser';
import TabsComponents from './TabsComponents';

const MeetingsComponents = () => (
  <div>
    <div className="meetings-container">
        <MeetingsListUser/>
        <TabsComponents/>
    </div>
  </div>
);


export default MeetingsComponents;
