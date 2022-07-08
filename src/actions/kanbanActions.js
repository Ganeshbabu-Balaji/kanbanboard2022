import Axios from 'axios'

export const CREATE_BOARD_ACTION = 'CREATE_BOARD';
export const DELETE_BOARD_ACTION = 'DELETE_BOARD';
export const EDIT_BOARD_ACTION = 'EDIT_BOARD';

export const UPLOAD_BOARD_ACTION = 'UPLOAD_BOARD';
export const FETCH_BOARDS_REQUEST_ACTION = 'FETCH_BOARDS_BOARD';
export const FETCH_BOARDS_SUCCESS_ACTION = 'FETCH_BOARDS_BOARD';
export const FETCH_BOARDS_FAILURE_ACTION = 'FETCH_BOARDS_BOARD';
export const FETCH_BOARDS_ACTION = 'FETCH_BOARDS';
export const DELETE_BOARD_FROM_SERVER_ACTION = 'DELETE_BOARD_FROM_SERVER';

const JSON_SERVER = 'http://localhost:8000/boards';
//Creates the definitions for all the functions

export const createAddBoardAction = (title, status, color, projectName) => ({
    type: CREATE_BOARD_ACTION,
    title: title,
    status: status,
    color: color,
    projectName: projectName
});

export const createDeleteBoardAction = (id) => ({
    type: DELETE_BOARD_ACTION,
    id: id

});

export const createEditBoardAction = (id, title, status, projectName) => ({
    type: EDIT_BOARD_ACTION,
    id: id,
    title: title,
    status: status,
    projectName: projectName
})



//--------------------------------------------------Server Actions------------------------------------------------------//


export const fetchBoards = () => {


    return async (dispatch, getState) => {
        console.log('Fetching boards from', JSON_SERVER)

        try{
            const response = await Axios.get(JSON_SERVER)

            dispatch({
                type: FETCH_BOARDS_ACTION,
                payload: response.data
            })
            console.log('Success!')

        }

        catch(error){
            console.log('Failed! Make sure that JSON_SERVER is set to the right value and turned on');
            
            dispatch({
                type: FETCH_BOARDS_FAILURE_ACTION
            })
        }
    }
    

}

export const uploadBoard = (title, status, color, projectName) => {


    return async (dispatch, getState) => {

        console.log('Board Uploaded to server')

        dispatch({
            type: CREATE_BOARD_ACTION,
            title: title,
            status: status,
            color: color,
            projectName: projectName,
        })

        const response = Axios.post('http://localhost:8000/boards', { title: title, status: status, status: status, color: color, projectName: projectName })

    }

}
export const deleteBoardFromServer = (id) => {
    return async (dispatch, setState) => {

        console.log('Board deleted from server')

        dispatch({
            type: DELETE_BOARD_ACTION,
            id: id
        })

        const response = Axios.delete(`${JSON_SERVER}/${id}`)

    }
}

export const editBoardOnServer = ( id, title, status, color, projectName) => {
    return async (dispatch, setState) => {

        console.log('Board edited on server')

        dispatch({
            type: EDIT_BOARD_ACTION,
            title: title,
            id: id,
            color: color,
            status: status,
            projectName: projectName,
        })
        const response = Axios.patch(`${JSON_SERVER}/${id}`, { id: id, title: title, status: status, color: color, projectName: projectName})

    }
}


export const fetchTasksRequest = () => {
    return {
        type: FETCH_BOARDS_REQUEST_ACTION
    }
}

export const fetchBoardsSuccess = (boards) => {
    return {
        type: FETCH_BOARDS_SUCCESS_ACTION,
        payload: boards
    }
}
