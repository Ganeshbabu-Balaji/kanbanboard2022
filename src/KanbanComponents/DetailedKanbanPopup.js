import React from 'react'
import { useState } from 'react';
import { EditKanbanListItem } from './EditKanbanListItem';
import '../css-files/DetailedKanbanPopupStyles.css';
import { Alertbox } from '../OtherComponents/Alertbox';
export const DetailedKanbanPopup = ({ setEditStatus, onEditBoard, board, onDeleteBoard, boardList, projectTitle }) => {

    const [isTitleBeingEdited, setTitleEditStatus] = useState(false);
    const [deleteAlertBox, setDeleteAlertBox] = useState(false)

    const deleteHandler = (id) => {
        if (boardList.length === 0) {
            onDeleteBoard(id);
            setEditStatus(false);
        }
        else {
            setDeleteAlertBox(true)
        }
    }
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
                                <text onClick={() => setTitleEditStatus(true)} style={{ fontSize: '33px', marginBottom: '23px' }} >{board.title} </text>
                            </div>

                        }
                        {isTitleBeingEdited == true &&
                            <EditKanbanListItem
                                isTitleBeingEdited={true}
                                toggleEdit={setTitleEditStatus}
                                onEditBoard={onEditBoard}
                                board={board}
                                projectTitle={projectTitle}
                                clickedItem='Edit Title' />
                                
                        }

                    </div>

                </div>

                <div className='popup-inner-edit-body'>
                    <button onClick={() => deleteHandler(board.id)}>
                        Delete Board
                    </button>
                    {deleteAlertBox == true &&
                    <Alertbox title='Delete Tasks' description='To delete the board, you must delete all the tasks first' toggleAlert={setDeleteAlertBox} />

                    }
                </div>
            </div>

        </div>)
}
