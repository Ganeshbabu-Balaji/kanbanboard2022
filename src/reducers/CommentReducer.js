import {
    CREATE_COMMENT_ACTION,
    DELETE_COMMENT_ACTION,
    EDIT_COMMENT_ACTION,
    UPLOAD_COMMENT_ACTION,
    FETCH_COMMENTS_ACTION,
    FETCH_COMMENTS_REQUEST_ACTION,
    FETCH_COMMENTS_FAILURE_ACTION,
    FETCH_COMMENTS_SUCCESS_ACTION,
    DELETE_COMMENT_FROM_SERVER_ACTION
} from '../actions/commentActions'

const currentDate = new Date();
const date = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}   ${currentDate.getHours()}:${currentDate.getMinutes()<10?'0':''}${currentDate.getMinutes()}`;

export const CommentReducer = (state = [], action) => {

    switch (action.type) {

        case CREATE_COMMENT_ACTION:
            return [
                ...state,
                {
                    id: Math.max(...state.map(c => c.id), 0) + 1,
                    parent: action.parent,
                    text: action.text,
                    date: date
                }]

        case DELETE_COMMENT_ACTION:
            return state.filter(elem => elem.id !== action.id);

        case EDIT_COMMENT_ACTION:
            return [
                ...state.filter(elem => elem.id !== action.id),
                {
                    id: action.id,
                    parent: action.parent,
                    text: action.text,
                    date: action.date

                },
            ]


        //------------------------------------------Server-------------------------------------------------------//
        case FETCH_COMMENTS_ACTION:
            return action.payload

        case UPLOAD_COMMENT_ACTION:
            return [
                ...state
            ]

        case DELETE_COMMENT_FROM_SERVER_ACTION:
            return [
                ...state
            ]

        case FETCH_COMMENTS_REQUEST_ACTION:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_COMMENTS_SUCCESS_ACTION:
            return {
                ...state,
                loading: false,
                projects: action.payload,
            }
        case FETCH_COMMENTS_FAILURE_ACTION:
            return [
                {
                    des: 'ERROR CONNECTING TO SERVER',
                    status: 'open',
                },

                {
                    des: 'ERROR CONNECTING TO SERVER',
                    status: 'doing',
                },

                {
                    des: 'ERROR CONNECTING TO SERVER',
                    status: 'done',
                }
            ]

        default:
            return state;



    }

}

