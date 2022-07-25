import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilterValueType = 'all' | 'active' | 'completed'


function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: "CSS", isDone: false },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
    ])

    const [filter, setFilter] = useState<FilterValueType>('all')
    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(task => task.id !== taskID))
    }

    const changeFilter = (filter: FilterValueType) =>{
        setFilter(filter)
    }
    let tasksForRender;
    switch (filter) {
        case "completed":
            tasksForRender = tasks.filter(tasks=>tasks.isDone)
            break
        case "active":
            tasksForRender = tasks.filter(tasks=>!tasks.isDone)
            break
        default:
            tasksForRender = tasks
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForRender}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
