import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValueType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTasks: (title: string) => void
}

export function Todolist(props: PropsType) {

    const addTask = () => {
        title && props.addTasks(title)
        setTitle('')
    }
    const KeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && addTask()
    }
    const [title, setTitle] = useState<string>('')
    const onChangePress = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onClickSetFilterAll = () => props.changeFilter('all')
    const onClickSetFilterActive = () => props.changeFilter('active')
    const onClickSetFilterCompleted = () => props.changeFilter('completed')

    let tasksItems = props.tasks.map((task: TaskType) => {
        return <li key={task.id}>
            <input type="checkbox" checked={props.tasks[0].isDone}/>
            <span>{props.tasks[0].title}</span>
            <button onClick={() => props.removeTask(task.id)
            }>XXL
            </button>
        </li>
    })

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onKeyDown={KeyPress} value={title} onChange={onChangePress}/>
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {tasksItems}
        </ul>
        <div>
            <button onClick={onClickSetFilterAll}>All</button>
            <button onClick={onClickSetFilterActive}>Active</button>
            <button onClick={onClickSetFilterCompleted}>Completed</button>
            <p>Хай!</p>
        </div>
    </div>
}
