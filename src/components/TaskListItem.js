import { EditTaskListItem } from './EditTaskListItem';
import { useState, useRef } from 'react'
import { useDrag } from 'react-dnd';

export const TaskListItem = ({ task, onDelete, onSaveEdit, onChangeStatus }) => {

    const [editStatus, setEditStatus] = useState(false); //For text box


    const [{ isDragging }, drag] = useDrag(() => ({  ///Handles drag and drop
        type: 'task', 
        item: { id: task.id, des: task.des },
        collect: (monitor) => ({ 
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const debugID = () => {
        console.log('Clicked Element ID is:', task.id)
    }
    const toggleEdit = () => {  // Toggles the edit component  (If breaks put ' editStatus ' in parentheses)
        if (editStatus === false) {
            setEditStatus(true);
            console.log('Task is being edited')
        }
        else {
            setEditStatus(false);
        }
    }

    return (
        <div>

            {editStatus === false && //Conditionals for edit option (When not editing)
                <div className='task-list-item' ref={drag} >
                    <li onClick={() => debugID()}>{task.des}</li>

                    {isDragging === false && <div className='task-list-item-buttons' >
                        <button type='button' onClick={() => onDelete(task.id)}>x</button>
                        <button type='button' onClick={() => toggleEdit(editStatus)}>Edit</button>
                    </div>}
                </div>
            }

            {editStatus === true && //Conditionals for edit option (When editing)
                <div>
                    <EditTaskListItem task={task} toggleEdit={toggleEdit} onSaveEdit={onSaveEdit} onChangeStatus={onChangeStatus} />
                </div>
            }
        </div>
    );
}