import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: []
}
export const TaskSlice = createSlice({
    name: 'tasks',
    initialState,

    reducers: {
        createTask: (state, action) => {
            state.tasks = [...state.tasks,
                {
                    id: Math.max(...state.map(c => c.id), 0) + 1,
                    title: action.title,
                    des: action.des,
                    status: 'open',
                }
            ];
        },

        deleteTask: (state, action) => {
            state.tasks = state.filter(elem => elem.id !== action.id); ;
        },

        editTask: (state, action) => {
            state.tasks = [
                ...state.filter(elem => elem.id !== action.id), //Deletes the orginal task then creates a new copy with the changed description
                {
                    id: action.id,
                    title: action.title,
                    des: action.des,
                    status: action.status
                },
            ]
        },

        editTaskStatus: (state, action) => {
            state.tasks = [
                ...state.filter(elem => elem.id !== action.id), { //The edit function but changes the task status
                    id: action.id,
                    title: action.title,
                    des: action.des,
                    status: action.status,

                },
            ]
        }
    }})

    export const {createTask, deleteTask, editTask ,editTaskStatus} = TaskSlice.actions;
    export default TaskSlice.reducer;