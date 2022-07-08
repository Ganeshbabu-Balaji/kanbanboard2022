import { CREATE_TASK_ACTION, DELETE_TASK_ACTION, EDIT_TASK_ACTION, CHANGE_STATUS_ACTION, UPLOAD_TASK_ACTION,  FETCH_TASKS_ACTION, FETCH_TASKS_REQUEST_ACTION, FETCH_TASKS_FAILURE_ACTION, FETCH_TASKS_SUCCESS_ACTION , DELETE_TASK_FROM_SERVER_ACTION} from '../actions/task-tool.actions';


const currentDate = new Date();
const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;

export const taskToolReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TASK_ACTION:  //Handles Task Creation: Copies the array then adds a new element
            return [
                ...state,
                {
                    id: Math.max(...state.map(c => c.id), 0) + 1,
                    title: action.title,
                    des: action.des,
                    status: action.status,
                    projectName: action.projectName,
                    date: date,
                    deadline: action.deadline
                }]

        case DELETE_TASK_ACTION: //Handles Task Deletion
            return state.filter(elem => elem.id !== action.id);  //Creates an array that returns an array without the task with the matching ID

        case EDIT_TASK_ACTION: //Handles Task Edit
            return [
                ...state.filter(elem => elem.id !== action.id), //Deletes the orginal task then creates a new copy with the changed description
                {
                    id: action.id,
                    title: action.title,
                    des: action.des,
                    status: action.status,
                    projectName: action.projectName
                },
            ]

        case CHANGE_STATUS_ACTION: //Handles Task Status Change
            return [
                ...state.filter(elem => elem.id !== action.id), { //The edit function but changes the task status
                    id: action.id,
                    title: action.title,
                    des: action.des,
                    status: action.status,
                    projectName: action.projectName

                },
            ]

//------------------------------------------Server-------------------------------------------------------//
        case FETCH_TASKS_ACTION:
            return action.payload
            
        case UPLOAD_TASK_ACTION:
            return [
                ...state
            ]

        case DELETE_TASK_FROM_SERVER_ACTION:
            return [
                ...state
            ]

        case FETCH_TASKS_REQUEST_ACTION:
                return {
                    ...state, 
                    loading: true,
                    error: null
                }

        case FETCH_TASKS_SUCCESS_ACTION:
            return {
                ...state,
                loading: false, 
                tasks: action.payload,
            }
        case FETCH_TASKS_FAILURE_ACTION:
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

