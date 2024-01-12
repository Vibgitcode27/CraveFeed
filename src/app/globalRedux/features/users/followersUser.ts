import { createSlice , PayloadAction } from "@reduxjs/toolkit";

export interface counterType {
    followers : {
        id : number | null,
        followerId : number | null,
        followingId : number | null
    },
    numberOfFollowers : number
}

const initialState : counterType =  {
    followers : {
        id : null,
        followerId : null,
        followingId : null
    },
    numberOfFollowers : 0
}

const followerSlice = createSlice({
    name : "userFollowers" ,
    initialState ,
    reducers : {
        followersUser(state , action)
        {
            state.numberOfFollowers = action.payload.length;
        }
    }
});

export const { followersUser } = followerSlice.actions;
export default followerSlice.reducer;