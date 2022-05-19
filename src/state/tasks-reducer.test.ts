import {v1} from "uuid";
import {tasksReducer} from "./tasks-reducer";
import {TasksType} from "../App";

test('Add task', () => {


        const todolistId1 = v1();
        const todolistId2 = v1();

        const startState: TasksType = {
            [todolistId1]: [
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false},
                {id: v1(), title: "Rfdfd", isDone: true},
                {id: v1(), title: "RefdfdactJS", isDone: false},
                {id: v1(), title: "ReacfdfdtJS", isDone: false},
            ],
            [todolistId2]: [
                {id: v1(), title: "Docker", isDone: true},
                {id: v1(), title: "TypeScript", isDone: false},
                {id: v1(), title: "Angular", isDone: false},
                {id: v1(), title: "JAVA", isDone: true},
            ]
        }

        let newTitle = 'NEWWWTASKKKK'
        const endState = tasksReducer(startState, {type: 'ADD_TASK', payload: {todolistId1, title: newTitle}})

        expect(endState[todolistId1].length).toBe(7)
        expect(endState[todolistId1][endState[todolistId1].length - 1].title).toBe(newTitle)
        expect(endState[todolistId2].length).toBe(4)

    }
)


export default 5