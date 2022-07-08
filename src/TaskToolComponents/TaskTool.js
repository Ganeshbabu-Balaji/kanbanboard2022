import { useState } from 'react'

import { KanbanSection } from '../KanbanComponents/KanbanSection';
import { Header } from '../OtherComponents/Header'
import { CreateBoardPopUp } from '../KanbanComponents/CreateBoardPopUp';
import '../css-files/KanbanStyles.css'
import '../css-files/Tasktool.css';



export const TaskTool = ({
    projectTitle,
    onCreate,
    onDelete,
    onSaveEdit,
    onChangeStatus,
    taskList,
    boardList,
    onCreateBoard,
    onEditBoard,
    onDeleteBoard

}) => {


    const [buttonPopupB, setButtonPopupB] = useState(false);
    //------------------------------------------Rendered Lists --------------------------------------------------------------------------//


    const boards = [].concat(boardList) //Boards 
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((board, i) =>
            <KanbanSection
                key={i}
                projectTitle={projectTitle}
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
                onCreate={onCreate}
            />
        );

    //-----------------------------------------------------------------------------------------------------------------------------------------------------//


    return ( // Layout

        <div className='layout'> {/* Layout for user Input */}

            <Header title={projectTitle} />

            <div className='create-task'>
                <div className='create-button'> {/* Change div to form if not working */}
                    <button onClick={() => setButtonPopupB(true)}>Create a new board</button>

                </div> {/* Change div to form if not working */}


                <CreateBoardPopUp onCreateBoard={onCreateBoard} trigger={buttonPopupB} setTrigger={setButtonPopupB} projectTitle={projectTitle} />

            </div>
            <div className='kanban-section'> {/* Layout for kanban sections */}
                {boards}
            </div>

        </div>
    )

}

