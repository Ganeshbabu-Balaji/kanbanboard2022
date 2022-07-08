import React from 'react'
import { useState } from 'react';
import { EditTaskListItem } from './EditTaskListItem';
import '../css-files/createTaskPopup.css';

export const DetailedEditTaskPopup = ({ setEditStatus, onSaveEdit, task, onChangeStatus, boardList, projectTitle }) => {

    const [isTitleBeingEdited, setTitleEditStatus] = useState(false);
    const [isDesBeingEdited, setDesEditStatus] = useState(false);

    const onSaveTaskWithChange = (id, title, des, newStatus) => { //Same thing as above but for onChangeStatus
        onChangeStatus(id, title, des, newStatus, projectTitle);
        setEditStatus(false);
        console.log(typeof(projectTitle))
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
                            <EditTaskListItem isTitleBeingEdited={true} toggleEdit={setTitleEditStatus} onSaveEdit={onSaveEdit} task={task} clickedItem='Edit Title' projectTitle={projectTitle}/>
                        }

                        {isDesBeingEdited == false &&
                            <p onClick={() => setDesEditStatus(true)}>{task.des}</p>
                        }
                        {isDesBeingEdited == true &&
                            <EditTaskListItem isTitleBeingEdited={false} toggleEdit={setDesEditStatus} onSaveEdit={onSaveEdit} task={task} clickedItem='Edit Description' projectTitle={projectTitle}/>
                        }
                    </div>

                </div>

                <div className='popup-inner-edit-body'>
                    <div className='popup-inner-edit-body-input'>

                    </div>

                    <div className='popup-inner-edit-body-buttons'>

                    {statusChangeButtons}

                    </div>
                </div>
            </div>

        </div>)
}
