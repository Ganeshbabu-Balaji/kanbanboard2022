import { CREATE_BOARD_ACTION, 
    DELETE_BOARD_ACTION, 
    EDIT_BOARD_ACTION, 
    UPLOAD_BOARD_ACTION, 
     FETCH_BOARDS_ACTION, 
     FETCH_BOARDS_REQUEST_ACTION, 
     FETCH_BOARDS_FAILURE_ACTION, 
     FETCH_BOARDS_SUCCESS_ACTION , 
     DELETE_BOARD_FROM_SERVER_ACTION} from '../actions/kanbanActions'

const initalBoards = [
    {
        id: 1,
        title: 'Open',
        status: 'open',
        color: '#87DEB7'
    },
    {
        id: 2,
        title: 'Doing',
        status: 'doing',
        color: '#B787DE'
    },
    {
        id: 3,
        title: 'Done',
        status: 'done',
        color: '#8C3FCA'
    },
]
export const kanbanReducer = (state = [], action) => {

    switch (action.type) {
        case CREATE_BOARD_ACTION:  
            return [
                ...state,
                {
                    id: Math.max(...state.map(c => c.id), 0) + 1,
                    title: action.title,
                    status: action.status,
                    color: action.color,
                }]

        case DELETE_BOARD_ACTION:
            return state.filter(elem => elem.id !== action.id); 

        case EDIT_BOARD_ACTION: 
            return [
                ...state.filter(elem => elem.id !== action.id), 
                {
                    id: action.id,
                    title: action.title,
                    status: action.status,
                    color: action.color
                },
            ]


//------------------------------------------Server-------------------------------------------------------//
        case FETCH_BOARDS_ACTION:
            return action.payload
            
        case UPLOAD_BOARD_ACTION:
            return [
                ...state
            ]

        case DELETE_BOARD_FROM_SERVER_ACTION:
            return [
                ...state
            ]

        case FETCH_BOARDS_REQUEST_ACTION:
                return {
                    ...state, 
                    loading: true,
                    error: null
                }

        case FETCH_BOARDS_SUCCESS_ACTION:
            return {
                ...state,
                loading: false, 
                boards: action.payload,
            }
        case FETCH_BOARDS_FAILURE_ACTION:
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

