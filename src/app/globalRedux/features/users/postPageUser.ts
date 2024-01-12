import { createSlice , PayloadAction } from "@reduxjs/toolkit";

export interface followerType {
    followers : {
        id : number | null,
        followerId : number | null,
        followingId : number | null
    },
    numberOfFollowers : number
}

const initialState : followerType =  {
    followers : {
        id : null,
        followerId : null,
        followingId : null
    },
    numberOfFollowers : 0
}

export const followerSlice = createSlice({
    name : "userFollowers" ,
    initialState ,
    reducers : {
        followersUser(state , action)
        {
            state.numberOfFollowers = action.payload
        }
    }
});

// Following 

export interface followingType {
    following : {
        id : number | null,
        followerId : number | null,
        followingId : number | null
    },
    followingNumbers : number
}

const initialStateFollowing : followingType =  {
    following : {
        id : null,
        followerId : null,
        followingId : null
    },
    followingNumbers : 0
}

export const followingSlice = createSlice({
    name : "userFollowing" ,
    initialState : initialStateFollowing ,
    reducers : {
        followingUsers(state , action){
            state.followingNumbers = action.payload;
        }
    }
})

export interface postType {
    posts : {
        id : number | null,
        userId : number | null,
        restaurant : string,
        dish : string,
        city : string,
        caption : string | null ,
        image : string | null,
        location : string | null ,
        likeCount : string | null
    },
    postCount : number
}

const initialStatePost : postType =  {
    posts : {
        id : 0,
        userId : null,
        restaurant : '',
        dish : '',
        city : '',
        caption : null,
        image : null,
        location : null ,
        likeCount : null
    },
    postCount : 0
}

export const postSlice = createSlice({
    name : "userPost" ,
    initialState : initialStatePost ,
    reducers : {
        userPosts(state , action){
            state.postCount = action.payload;
        }
    }
})
export const { followersUser } = followerSlice.actions;
export const { followingUsers } = followingSlice.actions;
export const { userPosts } = postSlice.actions;
export default {
    follower : followerSlice.reducer ,
    following : followingSlice.reducer ,
    posts : postSlice.reducer
}