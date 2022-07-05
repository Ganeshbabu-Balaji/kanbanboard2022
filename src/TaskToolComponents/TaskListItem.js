import { EditTaskListItem } from './EditTaskListItem';
import { DetailedEditTaskPopup } from './DetailedTaskPopup';
import { useState, useRef } from 'react'
import { useDrag } from 'react-dnd';
import '../css-files/TaskListItem.css'

export const TaskListItem = ({ task, onDelete, onSaveEdit, onChangeStatus, boardList }) => {
    
    const [editStatus, setEditStatus] = useState(false); //For text box

    const [{ isDragging }, drag] = useDrag(() => ({  ///Handles drag and drop
        type: 'task', 
        item: { id: task.id, title: task.title, des: task.des },
        collect: (monitor) => ({ 
            isDragging: !!monitor.isDragging(),
        }),
    }));



    return (
        <div className='displayed-tasks' ref={drag}>

        <div className='displayed-tasks-card' onClick={() => setEditStatus(true)}>
            {editStatus === false && //Conditionals for edit option (When not editing)
                <div className='task-list-item'  >
                    <li >{task.title}</li>

                    {isDragging === false && <div className='task-list-item-buttons' >
                        <button type='button' onClick={() => onDelete(task.id)}>x</button>
                    </div>}
                </div>
            }
            </div>
            {editStatus === true && //Conditionals for edit option (When editing)
                <div>
                    <DetailedEditTaskPopup task={task} setEditStatus={setEditStatus} onSaveEdit={onSaveEdit} onChangeStatus={onChangeStatus} boardList={boardList} />
                </div>
            }
        </div>
    );
}