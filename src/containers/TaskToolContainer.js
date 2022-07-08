import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import {
    fetchTasks,
    uploadTasks,
    editTaskOnServer,
    deleteTaskFromServer,
    changeTaskStatusOnServer
} from "../actions/task-tool.actions";

import { TaskTool } from '../TaskToolComponents/TaskTool'

import {
    fetchBoards,
    uploadBoard,
    editBoardOnServer,
    deleteBoardFromServer,

} from "../actions/kanbanActions";

import {
    fetchComments,
    uploadComment,
    editCommentOnServer,
    deleteCommentFromServer,

} from "../actions/commentActions";


export const TaskToolContainer = ({ projectTitle }) => {

    //-------------------------------------------------Use Selectors-----------------------------------------------------------------//
    const taskList = useSelector(state => {  //Returns the tasks from the state
        return state.tasks
    });

    const boardList = useSelector(state => {
        return state.boards
    })

    const commentList = useSelector(state => {
        return state.comments
    })

    const taskListFilteredByProject = taskList.filter(elem => elem.projectName === projectTitle);
    const boardListFilteredByProject = boardList.filter(elem => elem.projectName === projectTitle);

    //---------------------------------------------------Server Stuff---------------------------------------------------//


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBoards());
        dispatch(fetchTasks());
        dispatch(fetchComments());

    }, [])

    //----------------------------------------------------Action Binding--------------------------------------------------//

    const actions = bindActionCreators({ // Assigns functions from 'task-tool.actions.js'
        onCreate: uploadTasks,
        onDelete: deleteTaskFromServer,
        onSaveEdit: editTaskOnServer,
        onChangeStatus: changeTaskStatusOnServer,

        onCreateBoard: uploadBoard,
        onDeleteBoard: deleteBoardFromServer,
        onEditBoard: editBoardOnServer,

        onCreateComment: uploadComment,
        onDeleteComment: deleteCommentFromServer,
        onEditComment: editCommentOnServer,
    },

        useDispatch(),
    );

    //-------------------------------------------------Return---------------------------------------------------------//
    return ( //Returns TaskTool with the functions and state as parameters
        <TaskTool taskList={taskListFilteredByProject}
            {...actions}
            boardList={boardListFilteredByProject}
            projectTitle={projectTitle}
            commentList={commentList}
        />
    );
}


