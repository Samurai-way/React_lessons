import {userReducer} from "./user-reducer";

test.skip('user', ()=>{
    const startState = {age: 20, childrenCount: 2, name: 'Dimych'};
    const endCount = userReducer(startState, {type: 'INCREMENT-AGE'})
    const changeName = userReducer(startState, {type: 'CHANGE-NAME'})

    expect(endCount.age).toBe(21)
    expect(endCount.childrenCount).toBe(2)
    expect(changeName.name).toBe('Oleg')
})

test('user reducer', ()=>{

    const startState = {age: 20, childrenCount: 2, name: 'Dima'}

    const incrementChildren = userReducer(startState, {type: 'INCREMENT-COUNT-CHILD'})

    expect(incrementChildren.childrenCount).toBe(3)
})