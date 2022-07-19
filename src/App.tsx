import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";

function App() {

    let tasks1 = [
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]

    let tasks2 = [
        {id: 1, title: 'Terminator', isDone: true},
        {id: 2, title: 'XXX', isDone: false},
        {id: 3, title: 'Jentelmens of fortune', isDone: false},
    ]

    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={tasks1}/>
            <TodoList title={"Songs"} tasks={tasks2}/>
        </div>
    );
}

export default App;

