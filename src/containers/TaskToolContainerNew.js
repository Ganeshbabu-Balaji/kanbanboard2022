import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect} from 'react'


import { TaskTool } from '../TaskToolComponents/TaskTool'


export const TaskToolContainerNew = () => {



    //-------------------------------------------------Return---------------------------------------------------------//
    return ( //Returns TaskTool with the functions and state as parameters
        //  <TaskTool taskList={taskList} {...actions} openList={openList} doingList={doingList} doneList={doneList} />
        <TaskTool />
        );
}


