import React from 'react';
import './projectdetail.css';
import ProgressProject from './ProgressProject'
import ListTasksProject from './ListTasksProject'
import DetailTasksProject from './DetailTasksProject'

const ProjectsDetailComponents = () => (
  <div>
    <div className="projects-detail-container">
      <ProgressProject/>
      <div className="projectsdetailComponent">
        <ListTasksProject/>
        <DetailTasksProject/>
      </div>
    </div>
  </div>
);


export default ProjectsDetailComponents;
