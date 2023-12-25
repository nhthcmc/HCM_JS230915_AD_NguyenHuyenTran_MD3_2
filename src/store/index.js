import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./slices/task.slice";
import { userReducer } from "./slices/user.slice";

export const store = configureStore({
    reducer: {
        taskStore: taskReducer,
        userStore: userReducer
    }
})