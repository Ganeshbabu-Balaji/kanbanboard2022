import {createStore, applyMiddleware} from "@reduxjs/toolkit";
import allReducers from "./reducers/allReducers";
import thunk from 'redux-thunk';

export const taskToolStore = createStore(allReducers, applyMiddleware(thunk)); 