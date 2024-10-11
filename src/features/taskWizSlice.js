import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskWizSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state.items));
          },
          deleteTask: (state, action) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.items));
          },
    },
});

export const {addTask, deleteTask} = taskWizSlice.actions;
export default taskWizSlice.reducer;