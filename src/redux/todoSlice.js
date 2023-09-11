import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state,action) =>{ state.push(action.payload)},
        removeTodo: (state, action) => state.filter((todo) => todo.pos !== action.payload.pos)
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;