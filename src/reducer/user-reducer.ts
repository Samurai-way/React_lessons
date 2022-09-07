type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = {
    type: string
    [key: string]: any
}

export const userReducer = (state: StateType,action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            state.age = state.age + 1
            return state
        case 'CHANGE-NAME':
            state.name = 'Oleg'
            return state
        case 'INCREMENT-COUNT-CHILD':
            state.childrenCount = state.childrenCount + 1
            return state
        default:
            throw new Error('i dont know')
    }
}