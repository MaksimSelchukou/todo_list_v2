import {TasksType, TaskType} from "../App";
import {v1} from "uuid";

export type ActionAddTaskType = {
    type:'ADD_TASK'
    payload:{
        todolistId1:string
        title:string
    }
}


export const tasksReducer = (state: TasksType, action: ActionAddTaskType): TasksType => {
    switch (action.type) {
        case "ADD_TASK": {
            const newTask: TaskType = {id: v1(), title: action.payload.title, isDone: false}
            return {...state,[action.payload.todolistId1]:[...state[action.payload.todolistId1],newTask]}
        }
        default: {
            return state
        }
    }
}