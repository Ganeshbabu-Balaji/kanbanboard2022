import { useState } from 'react'

import { KanbanSection } from '../KanbanComponents/KanbanSection';
import { CreateTaskPopUp } from './CreateTaskPopUp';
import { TaskToolHeader } from './TaskToolHeader'
import { CreateBoardPopUp } from '../KanbanComponents/CreateBoardPopUp';
import '../css-files/KanbanStyles.css'
import '../css-files/Tasktool.css';



export const TaskTool = ({ onCreate, 
    onDelete, 
    onSaveEdit, 
    onChangeStatus, 
    taskList, 
    boardList, 
    onCreateBoard, 
    onEditBoard,
    onDeleteBoard}) => {


    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopupB, setButtonPopupB] = useState(false);
    //------------------------------------------Rendered Lists --------------------------------------------------------------------------//


    const boards = [].concat(boardList) //Boards 
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((board, i) =>
            <KanbanSection key={i} 
            board={board} 
            boardTitle={board.title} 
            listInput={taskList}  
            sectionName={board.status} 
            onSaveEdit={onSaveEdit} 
            color={board.color} 
            onDelete={onDelete} 
            onDeleteBoard={onDeleteBoard} 
            onEditBoard={onEditBoard} 
            onChangeStatus={onChangeStatus}
            boardList={boardList}
            />
        );

    //-----------------------------------------------------------------------------------------------------------------------------------------------------//


    return ( // Layout

        <div className='layout'> {/* Layout for user Input */}

            <TaskToolHeader />

            <div className='kanban-section'> {/* Layout for kanban sections */}
                {boards}
            </div>

            <div className='create-task'>
                <div className='create-button'> {/* Change div to form if not working */}
                    <button onClick={() => setButtonPopup(true)}>Create a new task</button>
                    <button onClick={() => setButtonPopupB(true)}>Create a new board</button>

                </div> {/* Change div to form if not working */}


                <CreateTaskPopUp  onCreate={onCreate} trigger={buttonPopup}  setTrigger={setButtonPopup}  boardList={boardList} />
                <CreateBoardPopUp  onCreateBoard={onCreateBoard} trigger={buttonPopupB}  setTrigger={setButtonPopupB}/>
                
            </div>
        </div>
    )

}

