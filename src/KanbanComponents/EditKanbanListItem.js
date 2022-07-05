import { useState } from 'react';
import '../css-files/createTaskPopup.css';

export const EditKanbanListItem = ({ isTitleBeingEdited, toggleEdit, onEditBoard, board, clickedItem }) => {

    const [changedItem, setChangedItem] = useState('')
    
    const saveBoardHandler = (boardId, title, des, status) => { //Saves the task then switches it back into the original component
        console.log('Board Saved');
        onEditBoard(boardId, title, des, status);
        toggleEdit(false);
    }


    return ( //The layout for the edit task component
        <div className='edit-task'>
            
            <input
                type='text'
                placeholder = {clickedItem}
                value={changedItem}
                onChange={(e) => setChangedItem(e.target.value)}
            />

            <button className='editTaskListItemButton'
                type='button'
                onClick={() => 
                    saveBoardHandler(board.id, changedItem, board.status, board.color) 
                }
                style={{backgroundColor: '#8fff9f '}}
                >
                Save
            </button>

            <button
                className='editTaskListItemButton'
                type='button' onClick={() => toggleEdit(false)}
                >
                Cancel
            </button>

        </div>

    );
}