import { kanbanReducer } from "./KanbanReducer"
import { taskToolReducer } from "./TaskToolReducer"
import { projectReducer } from './ProjectReducer'
import { CommentReducer } from './CommentReducer'
import { combineReducers } from "redux"

const allReducers = combineReducers({
    tasks: taskToolReducer,
    boards: kanbanReducer,
    projects: projectReducer,
    comments: CommentReducer,
})
export default allReducers