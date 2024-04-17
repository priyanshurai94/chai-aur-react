import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text: "heloo world"}]
}

export const todoSlice = createSlice({
    name:'todo',
    // redux toolkit me yhi naam show hoga
    initialState,
    // har slice ka initial value hota h to ye is slice ka initial value h

    reducers: {
        // yha function define ho rhi h jiska use hm baad me karege
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer