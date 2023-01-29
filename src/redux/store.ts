import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer";

export const store = configureStore({
    reducer: {
        app: reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch