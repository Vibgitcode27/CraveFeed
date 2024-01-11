import { createSlice , PayloadAction } from "@reduxjs/toolkit";

export interface counterType {
    user :  {
        id : number | null,
        email : string ,
        username : string ,
    }
}

const initialState : counterType =  {
    user :  {
        id : null,
        email : 'nil',
        username : 'nil',
    }
}

const userSlice = createSlice({
    name : "currentUser" ,
    initialState ,
    reducers : {
        currentUser(state , action) {
            state.user = action.payload
        } ,
    }
});

export const { currentUser } = userSlice.actions;
export default userSlice.reducer;