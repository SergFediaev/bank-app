import React, {useState} from 'react'
import './Associative.css'
import {Todolist} from './Todolist'
import {v1} from 'uuid'

export type FilterValuesType = 'all' | 'active' | 'completed';

export type ToDoListsType = ToDoListType

export type ToDoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

function Associative() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1()
    let todolistID2 = v1()

    let [toDoLists, setToDoLists] = useState<ToDoListsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ],
    })

    function removeTask(listId: string, taskId: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        const task = tasks[taskId]

        setTasks({...tasks, [listId]: tasks[listId].filter(task => task.id !== taskId)})
    }

    function addTask(listId: string, title: string) {
        setTasks({
            ...tasks,
            [listId]: [{id: v1(), title: title, isDone: false}, ...tasks[listId]],
        })

        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(listId: string, taskId: string, isDone: boolean) {
        setTasks({
            ...tasks,
            [listId]: tasks[listId].map(task => task.id === taskId ? {...task, isDone} : task),
        })

        /*        let task = tasks.find(t => t.id === taskId);
                if (task) {
                    task.isDone = isDone;
                }

                setTasks([...tasks]);*/
    }

    // let tasksForTodolist = tasks

    function changeFilter(listId: string, value: FilterValuesType) {
        setToDoLists(toDoLists.map(list => list.id === listId ? {...list, filter: value} : list))
    }

    return (
        <div className="App">
            {toDoLists.map(toDoList => {
                let tasksForTodolist = tasks[toDoList.id]

                if (toDoList.filter === 'active') {
                    tasksForTodolist = tasks[toDoList.id].filter(t => !t.isDone)
                }

                if (toDoList.filter === 'completed') {
                    tasksForTodolist = tasks[toDoList.id].filter(t => t.isDone)
                }

                return <Todolist
                    key={toDoList.id}
                    listId={toDoList.id}
                    title={toDoList.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={toDoList.filter}
                />
            })}
        </div>
    )
}

export default Associative