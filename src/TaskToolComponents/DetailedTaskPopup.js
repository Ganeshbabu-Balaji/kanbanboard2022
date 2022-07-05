import React from 'react'
import { useState } from 'react';
import { EditTaskListItem } from './EditTaskListItem';
import '../css-files/createTaskPopup.css';

export const DetailedEditTaskPopup = ({ setEditStatus, onSaveEdit, task, onChangeStatus, boardList }) => {

    const [isTitleBeingEdited, setTitleEditStatus] = useState(false);
    const [isDesBeingEdited, setDesEditStatus] = useState(false);

    const onSaveTaskWithChange = (id, title, des, newStatus) => { //Same thing as above but for onChangeStatus
        onChangeStatus(id, title, des, newStatus);
        setEditStatus(false);
    }
    const statusChangeButtons = boardList.map((button) => {
    return <button key={task.id}
    style={{backgroundColor: button.color}} onClick={() => onSaveTaskWithChange(task.id, task.title, task.des, button.status)}
    >{button.title} 
    </button>
    })



    return (

        <div className='popup'>

            <div className='popup-inner-edit'>


                <div className='popup-inner-taskdetails'>

                    <div className='cancel-button'>
                        <button onClick={() => setEditStatus(false)}>x</button>
                    </div>

                    <div className='popup-inner-edit-header'>

                        {isTitleBeingEdited == false &&
                            <div>
                                <text onClick={() => setTitleEditStatus(true)} style={{ fontSize: '33px', marginBottom: '23px' }} >{task.title} </text>
                            </div>
                        }
                        {isTitleBeingEdited == true &&
                            <EditTaskListItem isTitleBeingEdited={true} toggleEdit={setTitleEditStatus} onSaveEdit={onSaveEdit} task={task} clickedItem='Edit Title' />
                        }

                        {isDesBeingEdited == false &&
                            <p onClick={() => setDesEditStatus(true)}>{task.des}</p>
                        }
                        {isDesBeingEdited == true &&
                            <EditTaskListItem isTitleBeingEdited={false} toggleEdit={setDesEditStatus} onSaveEdit={onSaveEdit} task={task} clickedItem='Edit Description' />
                        }
                    </div>

                </div>

                <div className='popup-inner-edit-body'>
                    <div className='popup-inner-edit-body-input'>

                    </div>

                    <div className='popup-inner-edit-body-buttons'>
                        {/* 
                        <button
                            className='changeToOpenButton'
                            type='button'
                            onClick={() => onSaveTaskWithChange(task.id, task.title, task.des, 'open')}
                            style={{ backgroundColor: '#8fff9f ' }}
                        >
                            Open
                        </button>

                        <button
                            className='changeToDoingButton'
                            type='button' onClick={() => onSaveTaskWithChange(task.id, task.title, task.des, 'doing')}>
                            Doing
                        </button>

                        <button className='changeToDoneButton'
                            type='button'
                            onClick={() => onSaveTaskWithChange(task.id, task.title, task.des, 'done')}>
                            Completed
                        </button> */}
                    {statusChangeButtons}

                    </div>
                </div>
            </div>

        </div>)
}