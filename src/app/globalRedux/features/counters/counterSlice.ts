import { createSlice , PayloadAction } from "@reduxjs/toolkit";

export interface counterType {
    value : number;
}

const initialState : counterType =  {
    value : 0,
}

const counterSlice = createSlice({
    name : "counter" ,
    initialState ,
    reducers : {
        increment(state) {
            state.value ++;
        } ,
        decrement(state) {
            state.value++;
        },
        addAnyValue(state , action : PayloadAction<number>) {
            state.value = action.payload
        }
    }
});

export const {increment , decrement , addAnyValue} = counterSlice.actions;
export default counterSlice.reducer;