import React from 'react';
import {TasksStateType} from "../App";

type otherTypes = firstActionType | secondActionType

type firstActionType = ReturnType<typeof secondAC>
type secondActionType = ReturnType<typeof removeTaskAC>

export const tasksReducer = (state: TasksStateType, action: otherTypes) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' :
            return {
                ...state,
                [action.todolistId1]: state[action.todolistId1].filter(el => el.id !== action.taskId)
            }
        case '':
            return state
        case '':
            return state
        case '':
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


export const secondAC = (newTodolistTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {newTodolistTitle}
    } as const
}

