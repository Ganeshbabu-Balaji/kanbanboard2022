import React from 'react'
import { useState } from 'react';
import { EditKanbanListItem } from './EditKanbanListItem';
import '../css-files/DetailedKanbanPopupStyles.css';

export const DetailedKanbanPopup = ({ setEditStatus, onEditBoard, board,  onDeleteBoard}) => {

    const [isTitleBeingEdited, setTitleEditStatus] = useState(false);

    const deleteHandler = (id) => {
        onDeleteBoard(id);
        setEditStatus(false);
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
                            clickedItem='Edit Title' />
                        }

                    </div>

                </div>

                <div className='popup-inner-edit-body'>
                    <button onClick={() => deleteHandler(board.id)}>
                        Delete Board
                    </button>
                </div>
            </div>

        </div>)
}
