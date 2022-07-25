import React from 'react';
import {FilterValueType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (filter: FilterValueType)=>void
}

export function Todolist(props: PropsType) {

    let tasksItems = props.tasks.map((task: TaskType)=>{
        return <li key={task.id}>
            <input type="checkbox" checked={props.tasks[0].isDone}/>
            <span>{props.tasks[0].title}</span>
            <button onClick={()=>props.removeTask(task.id)
            }>XXL</button>
        </li>
    })

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {tasksItems}
        </ul>
        <div>
            <button onClick={()=>props.changeFilter('all')}>All</button>
            <button onClick={()=>props.changeFilter('active')}>Active</button>
            <button onClick={()=>props.changeFilter('completed')}>Completed</button>
        </div>
    </div>
}
