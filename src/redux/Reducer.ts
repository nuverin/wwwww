import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    client: {userLogged: false}
}
export const ReducerSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        ActionLog: (state) => {
            state.client.userLogged = !state.client.userLogged
        }
    }
})

export const {ActionLog} = ReducerSlice.actions;

export default ReducerSlice.reducer