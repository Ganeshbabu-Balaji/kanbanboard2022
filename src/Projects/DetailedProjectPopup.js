import React from 'react'
import { EditProject } from './EditProject';
import { useState } from 'react';

const DetailedProjectPopup = ({ project, toggle, onDeleteProject, onEditProject }) => {

  const [isTitleBeingEdited, setTitleEditStatus] = useState(false);
  const [isDesBeingEdited, setDesEditStatus] = useState(false);

  const deleteHandler = () => {
    onDeleteProject(project.id)
    toggle(false);
  }
  return (
    <div className='popup'>
      <div className='popup-inner'>

        <div className='project-popup-body'>
          <div className='project-popup-inner-header'>
            <button onClick={() => toggle(false)}>x</button>
          </div>
          
          <h1 onClick={() => setTitleEditStatus(true)}>{project.title}</h1>

          {/* {isTitleBeingEdited === false &&
            <>
              <h1 onClick={() => setTitleEditStatus(true)}>{project.title}</h1>
            </>
          }
          {isTitleBeingEdited === true &&
            <>
              <EditProject isTitleBeingEdited={true} toggleEdit={setTitleEditStatus} onEditProject={onEditProject} project={project}/>
            </>
          } */}

          {isDesBeingEdited === false &&

            <h5 onClick={() => setDesEditStatus(true)} style={{ fontSize: '20px', marginTop: '0px' }}>{project.des}</h5>
          }
          {isDesBeingEdited === true &&
            <>
              <EditProject isTitleBeingEdited={false} toggleEdit={setDesEditStatus} onEditProject={onEditProject} project={project}/>
            </>
          }

        </div>
        <div className='project-popup-inner-buttons'>
          <button className='submit' type='button' style={{ backgroundColor: '#FF7F7F ' }} onClick={() => deleteHandler()}>Delete Project</button>

        </div>
      </div>
    </div>

  )
}

export default DetailedProjectPopup