import Axios from 'axios'

export const CREATE_TASK_ACTION = 'CREATE_TASK';
export const DELETE_TASK_ACTION = 'DELETE_TASK';
export const EDIT_TASK_ACTION = 'EDIT_TASK';
export const ADD_TEXT_ACTION = 'ADD_TEXT';
export const SORT_TASK_BY_ID_ACTION = 'SORT_TASK';
export const CHANGE_STATUS_ACTION = 'CHANGE_STATUS';

export const UPLOAD_TASK_ACTION = 'UPLOAD_TASK';
export const FETCH_TASKS_REQUEST_ACTION = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS_ACTION = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE_ACTION = 'FETCH_TASKS_FAILURE';
export const FETCH_TASKS_ACTION = 'FETCH_TASKS';
export const DELETE_TASK_FROM_SERVER_ACTION = 'DELETE_TASK_FROM_SERVER';

const JSON_SERVER = 'http://localhost:8000/tasks';
const currentDate = new Date();
const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;

//Creates the definitions for all the functions

export const createAddTaskAction = (title, des, status, projectName, deadline) => ({
    type: CREATE_TASK_ACTION,
    title: title,
    des: des,
    status: status,
    projectName: projectName
});

export const createDeleteTaskAction = (id) => ({
    type: DELETE_TASK_ACTION,
    id: id

});

export const createEditTaskAction = (id, title, des, status, projectName, deadline) => ({
    type: EDIT_TASK_ACTION,
    id: id,
    title: title,
    des: des,
    status: status,
    projectName: projectName
})

export const createAddTextAction = (text) => ({
    type: ADD_TEXT_ACTION,
    text: text,
})

export const createChangeStatusAction = (id, title, des, status, projectName, deadline) => ({
    type: CHANGE_STATUS_ACTION,
    id: id,
    title: title,
    des: des,
    status: status,
    projectName: projectName
})


//--------------------------------------------------Server Actions------------------------------------------------------//


export const fetchTasks = (toggleConnectionStatus) => {


    return async (dispatch, getState) => {
        console.log('Fetching Tasks from', JSON_SERVER)

        try {
            const response = await Axios.get('http://localhost:8000/tasks')

            dispatch({
                type: FETCH_TASKS_ACTION,
                payload: response.data
            })
            console.log('Success!')

        }

        catch (error) {
            console.log('Failed! Make sure that JSON_SERVER is set to the right value and turned on');

            dispatch({
                type: FETCH_TASKS_FAILURE_ACTION
            })
        }
    }


}

export const uploadTasks = (title, des, status, projectName, deadline) => {


    return async (dispatch, getState) => {

        console.log('Task Uploaded to server')

        dispatch({
            type: CREATE_TASK_ACTION,
            title: title,
            des: des,
            status: status,
            projectName: projectName,
            deadline: deadline
        })

        const response = Axios.post('http://localhost:8000/tasks', {
            title: title,
            des: des,
            status: status,
            projectName: projectName,
            date: date,
            deadline: deadline
        
    })

}

}
export const deleteTaskFromServer = (id) => {
    return async (dispatch, setState) => {

        console.log('Task deleted from server')

        dispatch({
            type: DELETE_TASK_ACTION,
            id: id
        })

        const response = Axios.delete(`${JSON_SERVER}/${id}`)

    }
}

export const editTaskOnServer = (id, title, des, status, projectName, deadline) => {
    return async (dispatch, setState) => {

        console.log('Task edited on server')

        dispatch({
            type: EDIT_TASK_ACTION,
            title: title,
            id: id,
            des: des,
            status: status,
            projectName: projectName,
            deadline: deadline
        })
        const response = Axios.patch(`${JSON_SERVER}/${id}`, { id: id, title: title, des: des, status: status, projectName: projectName, deadline: deadline})

    }
}

export const changeTaskStatusOnServer = (id, title, des, status, projectName, deadline) => {

    return async (dispatch, setState) => {

        console.log('Task status changed on server')

        dispatch({
            type: CHANGE_STATUS_ACTION,
            title: title,
            id: id,
            des: des,
            status: status,
            projectName: projectName,
            deadline: deadline
        })
        const response = Axios.patch(`${JSON_SERVER}/${id}`, { id: id, title: title, des: des, status: status, projectName: projectName, deadline: deadline })

    }

}
export const fetchTasksRequest = () => {
    return {
        type: FETCH_TASKS_REQUEST_ACTION
    }
}

export const fetchTasksSuccess = (tasks) => {
    return {
        type: FETCH_TASKS_SUCCESS_ACTION,
        payload: tasks
    }
}


// export const fetchTasksFailure = (error) => {
//     return {
//         type: FETCH_TASKS_FAILURE_ACTION,
//         payload: error
//     }
// }
