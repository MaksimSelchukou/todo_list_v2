import React, {ChangeEvent, useState} from 'react';
import {FilterType, TaskType} from "../App";
import styles from "./Todolist.module.css"
import {ButtonFilter} from "./buttons/ButtonFilter";
import {AddItemForm} from "./AddItemForm";

type TodolistType = {
    title: string
    tasks: Array<TaskType>
    deleteTask: (taskId: string) => void
    addTask: (titleTask: string) => void
    changeStatusTask: (taskId: string, status: boolean) => void
    sortTasks: (value: FilterType) => void
    filter: FilterType
}

export const Todolist = (props: TodolistType) => {


    const {title, tasks, deleteTask, addTask, changeStatusTask, sortTasks} = props

    const handleDeleteTask = (taskId: string) => {
        deleteTask(taskId)
    }

    const handleButtonFiltered = (value: FilterType) => {
        sortTasks(value)
    }

    return (
        <div className={styles.container}>
            <h2>{title}</h2>

            <AddItemForm name='+'
                         callBack={(titleTask) => addTask(titleTask)}
            />
            <ul>
                {
                    tasks.map(task => {
                        const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
                            changeStatusTask(task.id, event.currentTarget.checked)
                        }

                        return (
                            <li key={task.id}>
                                <input
                                    onChange={onChangeHandle}
                                    type="checkbox"
                                    checked={task.isDone}
                                />
                                <span>{task.title}</span>
                                <button onClick={() => handleDeleteTask(task.id)}>x</button>
                            </li>

                        )
                    })
                }
            </ul>
            <div>
                <ButtonFilter filter={props.filter} name="all" handleButtonFiltered={() => handleButtonFiltered("all")}/>
                <ButtonFilter filter={props.filter} name="active" handleButtonFiltered={() => handleButtonFiltered("active")}/>
                <ButtonFilter filter={props.filter} name="completed" handleButtonFiltered={() => handleButtonFiltered("completed")}/>
            </div>

        </div>
    );
};

