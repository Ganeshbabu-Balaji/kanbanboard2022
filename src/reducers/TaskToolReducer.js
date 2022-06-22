import { CREATE_TASK_ACTION, DELETE_TASK_ACTION, EDIT_TASK_ACTION, CHANGE_STATUS_ACTION } from '../actions/task-tool.actions';



export const taskToolReducer = (state = [], action) => {

    console.log(state);

    switch (action.type) {
        case CREATE_TASK_ACTION:  //Handles Task Creation: Copies the array then adds a new element
            return [
                ...state,
                {
                    id: Math.max(...state.map(c => c.id), 0) + 1,
                    des: action.des,
                    status: 'open',
                }]

        case DELETE_TASK_ACTION: //Handles Task Deletion
            return state.filter(elem => elem.id !== action.id);  //Creates an array that returns an array without the task with the matching ID

        case EDIT_TASK_ACTION: //Handles Task Edit
            return [


                ...state.filter(elem => elem.id !== action.id), //Deletes the orginal task then creates a new copy with the changed description
                {
                    des: action.des,
                    id: action.id,
                    status: action.status
                },
            ]

        case CHANGE_STATUS_ACTION: //Handles Task Status Change
            return [
                ...state.filter(elem => elem.id !== action.id), { //The edit function but changes the task status
                    id: action.id,
                    des: action.des,
                    status: action.status,

                },

            ]


        default:
            return state;



    }

}

