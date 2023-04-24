import { createSlice } from '@reduxjs/toolkit';
import { addUsers, fetchUsers } from './operations';


const initialState = {
    users: [],
    isLoading: false,
    error: null,
    

};
  
const usersSlice = createSlice({
    name: "users",
    initialState,



    extraReducers: {
        [fetchUsers.fulfilled](state, actions) {
            state.users = actions.payload;
            
        },
        [addUsers.fulfilled](state, actions) {
            state.users = [...state.users, ...actions.payload];
            
        }
    }
})


export const usersReducer = usersSlice.reducer;
