import { useDrop } from 'react-dnd';
import { useState } from 'react';
import '../css-files/KanbanStyles.css'
import { TaskListItem } from '../TaskToolComponents/TaskListItem';
import { DetailedKanbanPopup } from './DetailedKanbanPopup';
import { CreateTaskPopUp } from '../TaskToolComponents/CreateTaskPopUp';

export const KanbanSection = ({ 
    listInput, 
    boardTitle, 
    onChangeStatus, 
    sectionName, 
    onDelete, onSaveEdit, 
    color, 
    board, 
    onEditBoard, 
    onDeleteBoard, 
    boardList, 
    onCreate,
    projectTitle

}) => {

    const [editStatus, setEditStatus] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);


    const [, drop] = useDrop({ //Handles the droping functionality
        accept: "task",
        drop: (item) => onChangeStatus(item.id, item.title, item.des, sectionName, projectTitle),

    });

    const filterTasksStep1 = listInput.filter(elem => elem.status === sectionName)
    const filterdTasksStep2 = [].concat(filterTasksStep1)
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, i) =>
            <TaskListItem 
            key={i} 
            task={task} 
            onDelete={onDelete} 
            onSaveEdit={onSaveEdit} 
            onChangeStatus={onChangeStatus} 
            id={i} des={listInput.des} 
            boardList={boardList} 
            projectTitle={projectTitle}

            />
        );

    return (
        <div
            style={{
                backgroundColor: color,
                borderRadius: '15px',
                width: '400px',
                padding: '1rem',


            }}


            ref={drop}  > {/* The drop reference is passed here to make the section droppable */}
            <div className='board-header'>
                <h1>{boardTitle}</h1>
                <button onClick={() => setEditStatus(true)}> Edit Board </button>
            </div>
            <div >
                {filterdTasksStep2}
            </div>
            <div>
                {editStatus === true && //Conditionals for edit option (When editing)
                    <div>
                        <DetailedKanbanPopup board={board} setEditStatus={setEditStatus} onEditBoard={onEditBoard} onDeleteBoard={onDeleteBoard} boardList={filterTasksStep1} projectTitle={projectTitle}/>
                    </div>
                }
            </div>
            <div className='board-footer'>
                <button onClick={() => setButtonPopup(true)}>Create a new task</button>
                <CreateTaskPopUp onCreate={onCreate} trigger={buttonPopup} setTrigger={setButtonPopup} sectionName={sectionName} projectTitle={projectTitle}/>
            </div>
        </div>
    );
}