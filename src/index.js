import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { taskToolStore } from './taskToolStore'

import { Provider } from 'react-redux'
import { TaskToolContainer } from './containers/TaskToolContainer';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TaskToolContainerNew } from './containers/TaskToolContainerNew';

//console.log('THIS IS THE STORE' + taskToolStore);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={taskToolStore}> {/* For redux */}
        <DndProvider backend={HTML5Backend}> {/* For drag and drop */}
            <TaskToolContainer />
        </DndProvider>
    </Provider>

);


