import { useState } from 'react'
import { TaskListItem } from './TaskListItem'
import { KanbanSection } from './KanbanSection';

import './TaskList.css';



export const TaskTool = ({ task, onCreate, onDelete, onSaveEdit, onChangeStatus, taskList, openList, doingList, doneList }) => {



    const [taskInput, setTaskInput] = useState('')
    const [focusedBoard, setFocusedBoard] = useState('')
    //------------------------------------------Rendered Lists --------------------------------------------------------------------------//

    const renderedTaskItems = taskList.map(task => {  // Array of all the tasks without changing the order
        return <TaskListItem key={task.id} task={task} onDelete={onDelete} onSaveEdit={onSaveEdit} onChangeStatus={onChangeStatus} />
    })

    const orderedrenderedTaskItems = [].concat(taskList) //Array of tasks that is ordered by the ID. (Was used because when editing the task, the edited task would be at the end of the array)
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, i) =>
            <TaskListItem key={i} task={task} onDelete={onDelete} onSaveEdit={onSaveEdit} onChangeStatus={onChangeStatus} id={i} des={taskList.des} />
        );

    const openTasks = [].concat(openList) //Ordered array of open tasks
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, i) =>
            <TaskListItem key={i} task={task} onDelete={onDelete} onSaveEdit={onSaveEdit} onChangeStatus={onChangeStatus} id={i} des={taskList.des} />
        );

    const doingTasks = [].concat(doingList) //Ordered array of closed tasks
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, i) =>
            <TaskListItem key={i} task={task} onDelete={onDelete} onSaveEdit={onSaveEdit} onChangeStatus={onChangeStatus} id={i} des={taskList.des} />
        );


    const doneTasks = [].concat(doneList) //Ordered array of done tasks
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, i) =>
            <TaskListItem key={i} task={task} onDelete={onDelete} onSaveEdit={onSaveEdit} onChangeStatus={onChangeStatus} />
        );


    //-----------------------------------------------------------------------------------------------------------------------------------------------------//

    const handleSubmitTask = () => { //Creates a task then resets the input field
        onCreate(taskInput);
        setTaskInput('');
    }

    const onEnterButton = (event) => { //Function for pressing the enter button when submiting the task (Does not work if using the <Form> element)
        if (event.key === 'Enter') {
            handleSubmitTask();
        }
    }


    return ( // Layout

        <div className='layout'> {/* Layout for user Input */}
            <div className='create-task'>
                <div className='login_form'> {/* Change div to form if not working */}
                    <h1> Create Task: {''} </h1>
                    <input className='input-button' type='text' placeholder='Create Task' value={taskInput} onChange={(e) => setTaskInput(e.target.value)} onKeyPress={onEnterButton} />
                    <button className='submit' type='button' onClick={() => handleSubmitTask()}>Create Task</button>

                    <ul>
                    </ul>
                </div> {/* Change div to form if not working */}




            </div>

            <div className='kanban-section'> {/* Layout for kanban sections */}
                <div className='open-list'>
                    <KanbanSection sectionName='open' boardTitle='Open' listInput={openTasks} onChangeStatus={onChangeStatus} />
                </div>
                <div className='doing-list'>
                    <KanbanSection sectionName='doing' boardTitle='In Progress' listInput={doingTasks} onChangeStatus={onChangeStatus} />

                </div>

                <div className='done-list'>
                    <KanbanSection sectionName='done' boardTitle='Completed' listInput={doneTasks} onChangeStatus={onChangeStatus} />
                </div>


            </div>

        </div>
    )

}

