import {TasksStateType} from "../App";
import { v1 } from 'uuid';

type otherTypes = firstActionType | secondActionType | thirdActionType | fourActionType | fiveActionType

type firstActionType = ReturnType<typeof addTaskAC>
type secondActionType = ReturnType<typeof removeTaskAC>
type thirdActionType = ReturnType<typeof changeTaskStatusAC>
type fourActionType = ReturnType<typeof changeTaskTitleAC>
type fiveActionType = ReturnType<typeof RemoveTodolistAC>

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
        case 'CHANGE-TASK-STATUS':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(task => task.id === action.taskId ?
                        {...task, isDone: action.isDone} : task)
            }
        case 'CHANGE-TASK-TITLE':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(task => task.id === action.taskId ? {
                        ...task, title: action.title} : task)
            }
        case 'CHANGE-TODOLIST-FILTER':
            const copy = {...state};
              delete copy[action.todolistID]
                return copy
        default:
            throw new Error('')
    }
}

export const removeTaskAC = (taskId: string, todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        taskId, todolistId1
    } as const
}


export const addTaskAC = (title: string, todolistId: string) => {
    return {
        type: 'ADD-TODOLIST',
        title, todolistId
    } as const
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'CHANGE-TASK-STATUS',
        taskId, isDone, todolistId
    } as const
}

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string) => {
    return {
        type: 'CHANGE-TASK-TITLE', taskId,
        title, todolistId
    } as const
}

export const RemoveTodolistAC = (todolistID: string) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        todolistID
    } as const
}
