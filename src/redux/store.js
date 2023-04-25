import { configureStore } from '@reduxjs/toolkit';


import { usersReducer } from './slice';




export const rootReducer = {
        users: usersReducer, 
};



export const store = configureStore({
  reducer: rootReducer,
});

