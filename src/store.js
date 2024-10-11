import { configureStore } from "@reduxjs/toolkit";
import taskWizReducer from './features/taskWizSlice';

export const store = configureStore({
    reducer: {
        tasks: taskWizReducer,
    },
});