import React from 'react';
import {CardText} from 'material-ui/Card';
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
const styles = {

};

export default MeetingsComponents;
