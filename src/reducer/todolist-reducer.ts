import {TodolistType} from "../App";
import { v1 } from "uuid";


export const todolistsReducer = (state:Array<TodolistType>, action: otherTypes) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' :
            return state.filter(el => el.id !== action.payload.todolistId1)
        case 'ADD-TODOLIST':
            let newTodolist: TodolistType = {id: v1(), title: action.payload.newTodolistTitle, filter: "all"}
            return [...state, newTodolist]
        default:
            return state
    }
}

type otherTypes = todolistsReducerACType | addTodolistReducerAC

type todolistsReducerACType = ReturnType<typeof todolistsReducerAC>

export const todolistsReducerAC = (todolistId1: string) => {
    return{
        type: 'REMOVE-TODOLIST',
        payload: {todolistId1}
    } as const
}

type addTodolistReducerAC = ReturnType<typeof addTodolistReducerAC>

export const addTodolistReducerAC = (newTodolistTitle:string) => {
    return{
        type: 'ADD-TODOLIST',
        payload: {newTodolistTitle}
    }as const
}