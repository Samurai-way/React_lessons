import {TodolistType} from "../App";
import { v1 } from "uuid";


export const todolistsReducer = (state:Array<TodolistType>, action: otherTypes) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' :
            return state.filter(el => el.id !== action.payload.todolistId1)
        case 'ADD-TODOLIST':
            let newTodolist: TodolistType = {id: v1(), title: action.payload.newTodolistTitle, filter: "all"}
            return [...state, newTodolist]
        case 'CHANGE-TODOLIST-TITLE':
           return state.map(e => e.id === action.payload.todolistId2 ? {...e, title: action.payload.newTodolistTitle} : e)
        default:
            return state
    }
}

type otherTypes = todolistsReducerACType |
    addTodolistReducerAC |
    changeTodoListTitleProps

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

type changeTodoListTitleProps = ReturnType<typeof changeTodoListTitleAC>

export const changeTodoListTitleAC = (todolistId2: string, newTodolistTitle: string) => {
    return{
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {todolistId2, newTodolistTitle}
    }as const
}

// const todolist = todolists.find(tl => tl.id === id);
// if (todolist) {
//     // если нашёлся - изменим ему заголовок
//     todolist.title = title;
//     setTodolists([...todolists]);
// }