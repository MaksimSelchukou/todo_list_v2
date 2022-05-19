import {userReducer} from "./user-reducer";

test('increment age', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Maksim'}

    const endState = userReducer(startState, {type: 'INCREMENT_AGE'})

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
})

test('increment childrenCount', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Maksim'}

    const endState = userReducer(startState, {type: 'INCREMENT_CHILDREN'})

    expect(endState.age).toBe(20)
    expect(endState.childrenCount).toBe(3)
})