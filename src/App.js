import React from 'react'
import { TaskToolContainer } from './containers/TaskToolContainer';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ProjectContainer } from './containers/ProjectContainer';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from 'react'

import { fetchProjects } from "./actions/projectActions";
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

    const projectList = useSelector(state => {
        return state.projects
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProjects());

    }, [])

    console.log(projectList)

    const routes = [].concat(projectList)
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((project, i) =>
            <Route key={i}
                path={`/user/${project.title.replace(/\s/g, '')}`}
                element={
                    <TaskToolContainer
                        projectTitle={project.title}
                    />}
            />

        );


    return (
        <Router>
            <DndProvider backend={HTML5Backend}> {/* For drag and drop */}
                <Routes>

                    <Route path="/" element={<Navigate to="/user/home" />} />
                    <Route path='/user/home/*' element={<ProjectContainer />} />

                    {routes}

                    <Route path="*" element={
                        <main style={{ padding: "1rem" }}>
                            <p style={{ color: 'black', fontSize: '240px' }}>PAGE DOES NOT EXIST</p>
                        </main>
                    }
                    />
                </Routes>
            </DndProvider>
        </Router>)
}

export default App