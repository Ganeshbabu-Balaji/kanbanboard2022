import { useDrop } from 'react-dnd';
import React, { useState, useCallback, useRef } from "react";
export const KanbanSection = ({ listInput, boardTitle, onChangeStatus, sectionName, ogList }) => {


    const dragHandler = (id, des, newStatus) => {
        onChangeStatus(id, des, newStatus)
        console.log('ID ' + id, 'IS BEING MOVED');
        console.log(des, ' MOVED TO:', newStatus);

    }



    const [, drop] = useDrop({ //Handles the droping functionality
        accept: "task", 
        drop: (item) => dragHandler(item.id, item.des, sectionName),

    });

    return (
        <div className='kanban-section-board' ref={drop}  > {/* The drop reference is passed here to make the section droppable */}
            <h1>{boardTitle}</h1>
            <div className='kanban-section-ul'>
                {listInput}
            </div>
        </div>
    );
}