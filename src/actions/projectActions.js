import Axios from 'axios'

export const CREATE_PROJECT_ACTION = 'CREATE_PROJECT';
export const DELETE_PROJECT_ACTION = 'DELETE_PROJECT';
export const EDIT_PROJECT_ACTION = 'EDIT_PROJECT';

export const UPLOAD_PROJECT_ACTION = 'UPLOAD_PROJECT';
export const FETCH_PROJECTS_REQUEST_ACTION = 'FETCH_PROJECTS_PROJECT';
export const FETCH_PROJECTS_SUCCESS_ACTION = 'FETCH_PROJECTS_PROJECT';
export const FETCH_PROJECTS_FAILURE_ACTION = 'FETCH_PROJECTS_PROJECT';
export const FETCH_PROJECTS_ACTION = 'FETCH_PROJECTS';
export const DELETE_PROJECT_FROM_SERVER_ACTION = 'DELETE_PROJECT_FROM_SERVER';

const JSON_SERVER = 'http://localhost:8000/projects';
//Creates the definitions for all the functions

export const createAddProjectAction = (title, des, color) => ({
    type: CREATE_PROJECT_ACTION,
    title: title,
    des: des,
    color: color,
});

export const createDeleteProjectAction = (id) => ({
    type: DELETE_PROJECT_ACTION,
    id: id

});

export const createEditProjectAction = (id, des, title) => ({
    type: EDIT_PROJECT_ACTION,
    id: id,
    des: des,
    title: title,
})



//--------------------------------------------------Server Actions------------------------------------------------------//


export const fetchProjects = () => {


    return async (dispatch, getState) => {
        console.log('Fetching projectss from', JSON_SERVER)

        try{
            const response = await Axios.get(JSON_SERVER)

            dispatch({
                type: FETCH_PROJECTS_ACTION,
                payload: response.data
            })
            console.log('Success!')

        }

        catch(error){
            console.log('Failed! Make sure that JSON_SERVER is set to the right value and turned on');
            
            dispatch({
                type: FETCH_PROJECTS_FAILURE_ACTION
            })
        }
    }
    

}

export const uploadProject = (title, des, color) => {


    return async (dispatch, getState) => {

        console.log('Project Uploaded to server')

        dispatch({
            type: CREATE_PROJECT_ACTION,
            title: title,
            des: des,
            color: color,
        })

        const response = Axios.post('http://localhost:8000/projects', { title: title, des: des, color: color})

    }

}
export const deleteProjectFromServer = (id) => {
    return async (dispatch, setState) => {

        console.log('Project deleted from server')

        dispatch({
            type: DELETE_PROJECT_ACTION,
            id: id
        })

        const response = Axios.delete(`${JSON_SERVER}/${id}`)

    }
}

export const editProjectOnServer = ( id, title, des, color, projectName) => {
    return async (dispatch, setState) => {

        console.log('Project edited on server')

        dispatch({
            type: EDIT_PROJECT_ACTION,
            title: title,
            id: id,
            color: color,
            des: des,
        })
        const response = Axios.patch(`${JSON_SERVER}/${id}`, { id: id, title: title, des: des, color: color, projectName: projectName})

    }
}


export const fetchProjectsRequest = () => {
    return {
        type: FETCH_PROJECTS_REQUEST_ACTION
    }
}

export const fetchProjectsSuccess = (projects) => {
    return {
        type: FETCH_PROJECTS_SUCCESS_ACTION,
        payload: projects
    }
}
