import React, {ChangeEvent, useState} from 'react';
import {FilterType, TaskType} from "../App";
import styles from "./Todolist.module.css"

type TodolistType = {
    title: string
    tasks: Array<TaskType>
    deleteTask: (taskId: string) => void
    addTask: (titleTask: string) => void
    changeStatusTask: (taskId: string, status: boolean) => void
    setFilter: (filter: FilterType) => void
}

export const Todolist = (props: TodolistType) => {

    const {title, tasks, deleteTask, addTask, changeStatusTask, setFilter} = props

    const [titleTask, setTitleTask] = useState('')

    const handleDeleteTask = (taskId: string) => {
        deleteTask(taskId)
    }

    const handleAddTask = () => {
        addTask(titleTask)
    }

    const getValueTitleTask = (event: ChangeEvent<HTMLInputElement>) => {
        setTitleTask(event.currentTarget.value)
    }

    const handleButtonFiltered = (value: FilterType) => {
        setFilter(value)
    }

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <input type="text" onChange={getValueTitleTask}/>
            <button onClick={handleAddTask}>+</button>
            <ul>
                {
                    tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input
                                    onChange={(e) => {
                                        changeStatusTask(task.id, e.currentTarget.checked)

                                    }}
                                    type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <button onClick={() => handleDeleteTask(task.id)}>x</button>
                            </li>

                        )
                    })
                }
            </ul>
            <div>
                <button onClick={() => handleButtonFiltered('all')} className={styles.button}>All</button>
                <button onClick={() => handleButtonFiltered('active')} className={styles.button}>Active</button>
                <button onClick={() => handleButtonFiltered('completed')} className={styles.button}>Completed</button>
            </div>

        </div>
    );
};

