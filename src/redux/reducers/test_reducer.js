
import { Test1, Test2 } from '../action_type'
let initStare = 'hello'
export default function test(preState = initStare, action) {
    const { type, data } = action
    let newState
    switch (type) {
        case Test1:
            newState = preState + data;
            return newState
        case Test2:
            newState = preState + data + '!';
            return newState
        default:
            return preState;
    }
}