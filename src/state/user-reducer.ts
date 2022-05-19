type StateType = {
    age: number
    childrenCount: number
    name: string
}

type ActionType = {
    type: string
    [key: string]: any
}


export const userReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREMENT_AGE': {
            return {...state, age: state.age + 1}
        }
        case 'INCREMENT_CHILDREN': {
            return {...state, childrenCount: state.childrenCount + 1}
        }
        default: {
            return state
        }
    }
}