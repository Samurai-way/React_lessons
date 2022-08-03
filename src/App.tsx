import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";


export type FilterValueType = 'all' | 'active' | 'completed'


function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "CSS", isDone: false},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValueType>('all')
    const removeTask = (taskID: string) => {
        setTasks(tasks.filter(task => task.id !== taskID))
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    let addTasks = (title: string) => {
        setTasks([...tasks ,{
            id: v1(),
            title,
            isDone: false

        }])
    }
    console.log()
    let tasksForRender;
    switch (filter) {
        case "completed":
            tasksForRender = tasks.filter(tasks => tasks.isDone)
            break
        case "active":
            tasksForRender = tasks.filter(tasks => !tasks.isDone)
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
                      addTasks={addTasks}
            />
        </div>
    );
}

export default App;
