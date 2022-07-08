import Axios from 'axios'

export const CREATE_COMMENT_ACTION = 'CREATE_COMMENT';
export const DELETE_COMMENT_ACTION = 'DELETE_COMMENT';
export const EDIT_COMMENT_ACTION = 'EDIT_COMMENT';

export const UPLOAD_COMMENT_ACTION = 'UPLOAD_COMMENT';
export const FETCH_COMMENTS_REQUEST_ACTION = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS_ACTION = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE_ACTION = 'FETCH_COMMENTS_FAILURE';
export const FETCH_COMMENTS_ACTION = 'FETCH_COMMENTS';
export const DELETE_COMMENT_FROM_SERVER_ACTION = 'DELETE_COMMENT_FROM_SERVER';

const JSON_SERVER = 'http://localhost:8000/comments';
//Creates the definitions for all the functions

export const createAddCommentAction = (parent, text) => ({
    type: CREATE_COMMENT_ACTION,
    parent: parent,
    text: text,
});

export const createDeleteCommentAction = (id) => ({
    type: DELETE_COMMENT_ACTION,
    id: id

});

export const createEditCommentAction = (id, parent, text) => ({
    type: EDIT_COMMENT_ACTION,
    id: id,
    parent: parent,
    text: text,
})



//--------------------------------------------------Server Actions------------------------------------------------------//


export const fetchComments = () => {


    return async (dispatch, getState) => {
        console.log('Fetching comments from', JSON_SERVER)

        try {
            const response = await Axios.get(JSON_SERVER)

            dispatch({
                type: FETCH_COMMENTS_ACTION,
                payload: response.data
            })
            console.log('Success!')

        }

        catch (error) {
            console.log('Failed! Make sure that JSON_SERVER is set to the right value and turned on');

            dispatch({
                type: FETCH_COMMENTS_FAILURE_ACTION
            })
        }
    }


}

export const uploadComment = (parent, text) => {


    return async (dispatch, getState) => {

        console.log('Comment Uploaded to server')

        dispatch({
            type: CREATE_COMMENT_ACTION,
            parent: parent,
            text: text,
        })

        const response = Axios.post('http://localhost:8000/comments', { parent: parent, text: text })

    }

}
export const deleteCommentFromServer = (id) => {
    return async (dispatch, setState) => {

        console.log('Comment deleted from server')

        dispatch({
            type: DELETE_COMMENT_ACTION,
            id: id
        })

        const response = Axios.delete(`${JSON_SERVER}/${id}`)

    }
}

export const editCommentOnServer = (id, parent, text) => {
    return async (dispatch, setState) => {

        console.log('Comment edited on server')

        dispatch({
            type: EDIT_COMMENT_ACTION,
            parent: parent,
            text: text,

        })
        const response = Axios.patch(`${JSON_SERVER}/${id}`, {parent: parent, text: text})

    }
}


export const fetchCommentsRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST_ACTION
    }
}

export const fetchCommentsSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS_ACTION,
        payload: comments
    }
}
