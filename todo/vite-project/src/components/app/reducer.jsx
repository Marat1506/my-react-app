import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'add',
    initialState: {
        value: '',
    },
    reducers: {
        addTask: (state) => {
            state.value += "dcsdc"
        }
    }
})

export const {addTask} = counterSlice.actions;
export default counterSlice.reducer