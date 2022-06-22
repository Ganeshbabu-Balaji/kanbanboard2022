export const CREATE_TASK_ACTION = 'CREATE_TASK';
export const DELETE_TASK_ACTION = 'DELETE_TASK';
export const EDIT_TASK_ACTION = 'EDIT_TASK';
export const ADD_TEXT_ACTION = 'ADD_TEXT';
export const SORT_TASK_BY_ID_ACTION = 'SORT_TASK';
export const CHANGE_STATUS_ACTION = 'CHANGE_STATUS';


//Creates the definitions for all the functions

export const createAddTaskAction = (des) => ({ 
    type: CREATE_TASK_ACTION,
    des: des,
});

export const createDeleteTaskAction = (id) => ({
    type: DELETE_TASK_ACTION,
    id: id
});

export const createEditTaskAction = (id, des, status) => ({
    type: EDIT_TASK_ACTION,
    id: id,
    des: des,
    status: status
})

export const createAddTextAction = (text) => ({
    type: ADD_TEXT_ACTION,
    text: text,
})

export const createChangeStatusAction = (id, des, status) => ({
    type: CHANGE_STATUS_ACTION,
    id: id,
    des: des,
    status: status,
})
