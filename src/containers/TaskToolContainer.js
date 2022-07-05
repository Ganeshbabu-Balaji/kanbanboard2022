import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect} from 'react'
import {
    fetchTasks, 
    uploadTasks,
    editTaskOnServer,
    deleteTaskFromServer,
    changeTaskStatusOnServer
} from "../actions/task-tool.actions";

import { TaskTool } from '../TaskToolComponents/TaskTool'
import { fetchBoards,
    uploadBoard,
    editBoardOnServer,
    deleteBoardFromServer, 

} from "../actions/kanbanActions";


export const TaskToolContainer = () => {

//-------------------------------------------------Use Selectors-----------------------------------------------------------------//
    const taskList = useSelector(state => {  //Returns the tasks from the state
        return state.tasks
    });

    const boardList = useSelector(state =>{
        return state.boards
})
        


//---------------------------------------------------Server Stuff---------------------------------------------------//
    

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchTasks());
            dispatch(fetchBoards())

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

    },

        useDispatch(),
    );

    //-------------------------------------------------Return---------------------------------------------------------//
    return ( //Returns TaskTool with the functions and state as parameters
         <TaskTool taskList={taskList} {...actions}  boardList={boardList}/>
    );
}


