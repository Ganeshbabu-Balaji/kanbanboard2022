import { kanbanReducer } from "./KanbanReducer"
import { taskToolReducer } from "./TaskToolReducer"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    tasks: taskToolReducer,
    boards: kanbanReducer
})
export default allReducers