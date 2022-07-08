import React, { useEffect } from 'react'
import { ProjectTool } from '../Projects/ProjectTool'
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from 'react-redux'

import {
  fetchProjects,
  uploadProject,
  editProjectOnServer,
  deleteProjectFromServer,

} from "../actions/projectActions";

export const ProjectContainer = () => {

  const projectList = useSelector(state => {
    return state.projects
  })


  const actions = bindActionCreators({ // Assigns functions from 'task-tool.actions.js'

    onCreateProject: uploadProject,
    onDeleteProject: deleteProjectFromServer,
    onEditProject: editProjectOnServer,

  },

    useDispatch(),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());

  }, [])
  return (
    <ProjectTool {...actions} projectList={projectList} />
  )
}
