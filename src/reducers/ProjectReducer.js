import { CREATE_PROJECT_ACTION, 
    DELETE_PROJECT_ACTION, 
    EDIT_PROJECT_ACTION, 
    UPLOAD_PROJECT_ACTION, 
     FETCH_PROJECTS_ACTION, 
     FETCH_PROJECTS_REQUEST_ACTION, 
     FETCH_PROJECTS_FAILURE_ACTION, 
     FETCH_PROJECTS_SUCCESS_ACTION , 
     DELETE_PROJECT_FROM_SERVER_ACTION} from '../actions/projectActions'


export const projectReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_PROJECT_ACTION:  
            return [
                ...state,
                {
                    id: Math.max(...state.map(c => c.id), 0) + 1,
                    title: action.title,
                    color: action.color,
                }]

        case DELETE_PROJECT_ACTION:
            return state.filter(elem => elem.id !== action.id); 

        case EDIT_PROJECT_ACTION: 
            return [
                ...state.filter(elem => elem.id !== action.id), 
                {
                    id: action.id,
                    title: action.title,
                    color: action.color,
                },
            ]


//------------------------------------------Server-------------------------------------------------------//
        case FETCH_PROJECTS_ACTION:
            return action.payload
            
        case UPLOAD_PROJECT_ACTION:
            return [
                ...state
            ]

        case DELETE_PROJECT_FROM_SERVER_ACTION:
            return [
                ...state
            ]

        case FETCH_PROJECTS_REQUEST_ACTION:
                return {
                    ...state, 
                    loading: true,
                    error: null
                }

        case FETCH_PROJECTS_SUCCESS_ACTION:
            return {
                ...state,
                loading: false, 
                projects: action.payload,
            }
        case FETCH_PROJECTS_FAILURE_ACTION:
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

