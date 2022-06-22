import {createStore} from 'redux';
import {taskToolReducer} from './reducers/TaskToolReducer';

export const taskToolStore = createStore(taskToolReducer);