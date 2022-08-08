import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    ChangeTasks: (taskID: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")

    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    const ChangeTasksHendler =(e: ChangeEvent<HTMLInputElement>)=>{
                        let newIsDoneValue = e.currentTarget.checked;
                        props.ChangeTasks(t.id, newIsDoneValue);
                    }

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} onChange={ChangeTasksHendler}/>
                        <span className={t.isDone ? 'isDone' : ''}>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'activeButton' : ''} onClick={ onAllClickHandler }>All</button>
            <button className={props.filter === 'active' ? 'activeButton' : ''} onClick={ onActiveClickHandler }>Active</button>
            <button className={props.filter === 'completed' ? 'activeButton' : ''} onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}
