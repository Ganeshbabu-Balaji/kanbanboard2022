import { kanbanReducer } from "./KanbanReducer"
import { taskToolReducer } from "./TaskToolReducer"
import {projectReducer} from './ProjectReducer'
import { combineReducers } from "redux"
const allReducers = combineReducers({
    tasks: taskToolReducer,
    boards: kanbanReducer, 
    projects: projectReducer
})
export default allReducers