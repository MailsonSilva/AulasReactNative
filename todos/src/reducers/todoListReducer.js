import { ADD_TODO } from "../actions";

const todoListReduce = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            const newTodo = {
                text: action.text
            }
            return [...state, newTodo]
        default:
            return state;
    }
}

export default todoListReduce;