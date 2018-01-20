import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ProfileComponents from './ProfileComponents';
import EditProfileComponents from './EditProfileComponents';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = ({user}) => (
  <Tabs>
    <Tab label="Profile" >
      <ProfileComponents
          user={user}
        />
    </Tab>
    <Tab label="Edit Profile" >
      <EditProfileComponents/>
    </Tab>
    <Tab
      label="Change Pass"
    >
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;
