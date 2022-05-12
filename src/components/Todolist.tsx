import React from 'react';
import {TaskType} from "../App";
import styles from "./Todolist.module.css"

type TodolistType = {
    title: string
    tasks: Array<TaskType>
}

export const Todolist = (props: TodolistType) => {

    const {title, tasks} = props

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <input type="text"/>
            <button>+</button>
            <ul>
                {
                    tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input
                                    onChange={() => {}}
                                    type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <button>x</button>
                            </li>

                        )
                    })
                }
            </ul>
            <div>
                <button className={styles.button}>All</button>
                <button className={styles.button}>Active</button>
                <button className={styles.button}>Completed</button>
            </div>

        </div>
    );
};

