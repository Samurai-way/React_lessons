import {TasksStateType} from "../App";
import { v1 } from 'uuid';

type otherTypes = firstActionType | secondActionType

type firstActionType = ReturnType<typeof addTaskAC>
type secondActionType = ReturnType<typeof removeTaskAC>

export const tasksReducer = (state: TasksStateType, action: otherTypes) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' :
            return {
                ...state,
                [action.todolistId1]: state[action.todolistId1].filter(el => el.id !== action.taskId)
            }
        case 'ADD-TODOLIST': {

            const copy = {...state};
                const tasks = copy[action.todolistId];
                const newTask = {id: v1(), title: action.title, isDone: false};
                const newTasks = [newTask, ...tasks]
            copy[action.todolistId] = newTasks
            return copy
        }
        // case '':
            return state
        // case '':
            return state
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        taskId, todolistId1
    } as const
}


export const addTaskAC = (title: string ,todolistId: string) => {
    return {
        type: 'ADD-TODOLIST',
        title, todolistId
    } as const
}

