import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type ToDoListPropsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}


function App() {


    function removeTask(id: string, todolistID: string) {
        let tasks = tasksObj[todolistID];
        let filteredTasks = tasks.filter(t=>t.id !== id);
        tasksObj[todolistID]  =  filteredTasks;
        setTasksObj({...tasksObj})
    }

    function addTask(title: string, todolistID: string) {
        let task = {id: v1(), title: title, isDone: false};
        let tasks = tasksObj[todolistID];
        let newTasks = [task, ...tasks];
        tasksObj[todolistID] = newTasks;
        setTasksObj({...tasksObj})
    }

    function changeStatus(taskId: string, isDone: boolean, todolistID: string) {
        let tasks = tasksObj[todolistID];
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
            setTasksObj({...tasksObj})
        }
    }

    function changeFilter (value: FilterValuesType, todolistID: string) {
        let todoLIST = ToDolists.find(t=>t.id === todolistID);
        if(todoLIST){
            todoLIST.filter = value;
            setToDolist([...ToDolists])
        }
    }



    let ToDoID1 = v1();
    let ToDoID2 = v1();

    let [tasksObj, setTasksObj]=useState({
    [ToDoID1]: [{id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "Rest API", isDone: false},
    {id: v1(), title: "GraphQL", isDone: false}],
    [ToDoID2]: [{id: v1(), title: "Milk", isDone: true},
    {id: v1(), title: "Water", isDone: false}]
    })

    let [ToDolists, setToDolist]=useState<Array<ToDoListPropsType>>([
        {id: ToDoID1, title: "What to learn", filter: 'completed'},
        {id: ToDoID2, title: "What to bye", filter: 'active'},
    ])


    let RemoveToDo = (todolistID: string) => {
        let filteredToDolist = ToDolists.filter(el=>el.id !== todolistID)
        setToDolist(filteredToDolist);
        delete tasksObj[todolistID]
        setTasksObj({...tasksObj})
    }

    return (
        <div className="App">


            {
                ToDolists.map(el => {


                    let tasksForTodolist = tasksObj[el.id];
                    console.log(tasksObj)
                    console.log(el.id)
                    if (el.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                    }
                    if (el.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                    }


                    return (
                        <Todolist
                            key={el.id}
                            id={el.id}
                            title={el.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={el.filter}
                            RemoveToDo={RemoveToDo}
                        />
                    );
                })
            }
        </div>
    );
}

export default App;
