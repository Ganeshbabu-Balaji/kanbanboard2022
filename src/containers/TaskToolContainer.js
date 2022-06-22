import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from 'react-redux'

import { createAddTaskAction, createChangeStatusAction, createDeleteTaskAction, createEditTaskAction } from "../actions/task-tool.actions";

import { TaskTool } from '../components/TaskTool'


export const TaskToolContainer = () => {

    const taskList = useSelector(state => {  //Returns the tasks from the state
        return state
    });

    const openList = useSelector(state => { //Returns the 'open' tasks from the state
        return state.filter(elem => elem.status === 'open')
    })

    const doingList = useSelector(state => {
        return state.filter(elem => elem.status === 'doing') //Returns the 'doing' tasks from the state
    })

    const doneList = useSelector(state => {
        return state.filter(elem => elem.status === 'done') //Returns the 'done' tasks from the state
    })

    const actions = bindActionCreators({ // Assigns functions from 'task-tool.actions.js'
        onCreate: createAddTaskAction,
        onDelete: createDeleteTaskAction,
        onSaveEdit: createEditTaskAction,
        onChangeStatus: createChangeStatusAction,
    },

        useDispatch(),
    );

    return ( //Returns TaskTool with the functions and state as parameters
        <TaskTool taskList={taskList} {...actions} openList={openList} doingList={doingList} doneList={doneList} />
    );
}


