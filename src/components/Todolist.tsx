import React, {ChangeEvent} from 'react';
import {FilterType, TaskType} from "../App";
import styles from "./Todolist.module.css"
import {ButtonFilter} from "./buttons/ButtonFilter";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";


type TodolistType = {
    todoId: string
    title: string
    tasks: Array<TaskType>
    deleteTask: (todoId: string, taskId: string) => void
    addTask: (todoId: string, titleTask: string) => void
    changeStatusTask: (todoId: string, taskId: string, status: boolean) => void
    sortTasks: (todoId: string, value: FilterType) => void
    filter: FilterType
    removeTodolist: (todoId: string) => void
    changeTaskTitle: (todoId: string, taskId: string, titleTask: string) => void
    changeTodolistTitle: (todoId: string, titleTodolist: string) => void
}

export const Todolist = (props: TodolistType) => {


    const {todoId, title, tasks, deleteTask, addTask, changeStatusTask, sortTasks,changeTodolistTitle} = props

    const handleDeleteTask = (taskId: string) => {
        deleteTask(todoId, taskId)
    }

    const handleButtonFiltered = (value: FilterType) => {
        sortTasks(todoId, value)
    }

    const handleChangeTodolistTitle = (titleTodo:string) => {
        changeTodolistTitle(props.todoId,titleTodo)
    }

    const handleRemoveTodo = () => {
        props.removeTodolist(todoId)
    }

    const handleAddTask = (title: string) => {
        addTask(todoId, title)
    }

    return (
        <div>
            <h3>
               <EditableSpan title={title} onChange={handleChangeTodolistTitle}/>
            <IconButton onClick={handleRemoveTodo} >
                <Delete/>
            </IconButton>
            {/*</div>*/}
            </h3>
            {/*<AddItemForm name='+' callBack={(titleTask) => addTask(todoId, titleTask)}/>*/}

            <AddItemForm addItem={handleAddTask}/>
            <ul>
                {
                    tasks.map(task => {
                        const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
                            changeStatusTask(todoId, task.id, event.currentTarget.checked)
                        }

                        const handleChangeTitleTask = (value: string) => {
                            props.changeTaskTitle(props.todoId, task.id, value)
                        }

                        return (
                            <li key={task.id} className={task.isDone ? styles.opacityLi : ''}>
                                <Checkbox
                                    onChange={onChangeHandle}
                                    // type="checkbox"
                                    checked={task.isDone}
                                />
                                <EditableSpan onChange={handleChangeTitleTask} title={task.title}/>
                                <IconButton onClick={() => handleDeleteTask(task.id)} >
                                    <Delete/>
                                </IconButton>
                                {/*<button onClick={() => handleDeleteTask(task.id)}>x</button>*/}
                            </li>

                        )
                    })
                }
            </ul>
            <div className={styles.buttonFilter}>
                <ButtonFilter filter={props.filter} name="all"
                              handleButtonFiltered={() => handleButtonFiltered("all")}/>
                <ButtonFilter filter={props.filter} name="active"
                              handleButtonFiltered={() => handleButtonFiltered("active")}/>
                <ButtonFilter filter={props.filter} name="completed"
                              handleButtonFiltered={() => handleButtonFiltered("completed")}/>
            </div>

        </div>

    );
};

