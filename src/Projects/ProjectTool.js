import React from 'react'
import Header from '../OtherComponents/Header'
import { ProjectCard } from './ProjectCard'
import '../css-files/ProjectTool.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskToolContainer } from '../containers/TaskToolContainer';
import '../css-files/ProjectTool.css'
import {useState} from 'react'
import CreateProjectPopup from './CreateProjectPopup';

export const ProjectTool = ({ projectList, onCreateProject, onEditProject, onDeleteProject }) => {
  
  const [createStatus, setCreateStatus] = useState(false);
  
  const projects = [].concat(projectList) //Boards 
    .sort((a, b) => a.id > b.id ? 1 : -1)
    .map((project, i) =>
      <ProjectCard key={i}
        project={project}
        title={project.title}
        color={project.color}
        onDeleteProject={onDeleteProject}
        onEditProject={onEditProject}
        projectList={projectList}
        onCreateProject={onCreateProject}
      />
  
      );
  return (
    <div className='layout'> {/* Layout for user Input */}

      <Header title='Project Manager' />

      <div className='create-project'>
        <div className='create-button'> {/* Change div to form if not working */}
          <button onClick={() => setCreateStatus(true)}>Create a new Project</button>

        </div> {/* Change div to form if not working */}



      </div>
      <div className='project-manager-body'> {/* Layout for kanban sections */}
        {projects}

        {createStatus === true &&
          <CreateProjectPopup toggle={setCreateStatus} onCreateProject={onCreateProject}
          />
        }
      </div>

    </div>

  )
}
