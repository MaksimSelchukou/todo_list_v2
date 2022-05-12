import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rfdfd", isDone: true},
        {id: v1(), title: "RefdfdactJS", isDone: false},
        {id: v1(), title: "ReacfdfdtJS", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    const deleteTask = (taskId: string) => {
        setTasks(tasks.filter(f => f.id !== taskId))
    }

    const addTask = (titleTask: string) => {
        const newTask: TaskType = {id: v1(), title: titleTask, isDone: false}
        setTasks([...tasks, newTask])
    }

    const changeStatusTask = (taskId: string, status: boolean) => {
        setTasks(tasks.map(task => task.id === taskId ? {...task, isDone: status} : task))
    }
    let filteredTasks = tasks
    if (filter === 'completed') {
        filteredTasks = tasks.filter(f => f.isDone)
    }
    if (filter === 'active') {
        filteredTasks = tasks.filter(f => !f.isDone)
    }


    return (
        <div className="App">
            <Todolist
                title="Todolist1"
                tasks={filteredTasks}
                deleteTask={deleteTask}
                addTask={addTask}
                changeStatusTask={changeStatusTask}
                setFilter={setFilter}
            />
        </div>
    );
}

export default App;
