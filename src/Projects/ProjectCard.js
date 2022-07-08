import React from 'react'
import { useState } from 'react'
import DetailedProjectPopup from './DetailedProjectPopup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskToolContainer } from '../containers/TaskToolContainer';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ project, title, color, onDeleteProject, onEditProject}) => {

  const [isBeingEdited, setBeingEdited] = useState(false);

  return (
    <div className='project-card'
      style={{ backgroundColor: color }}
    >
      <div className='project-card-header'>
        <Link to={`/user/${(title.toLowerCase()).replace(/\s/g, '')}`}><h1>{title}</h1></Link>
        <button onClick={() => setBeingEdited(true)}>Edit Project</button>
      </div>
      {isBeingEdited === true &&
        <DetailedProjectPopup project={project} onDeleteProject={onDeleteProject} toggle={setBeingEdited} onEditProject={onEditProject} />
      }

      <Routes>
        <Route path={`/user/${title}`} element={<TaskToolContainer projectName={title} />} />
      </Routes>
    </div>
  )
}

