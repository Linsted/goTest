import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersReducer } from './slice';



const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'users',
  storage,
  whitelist: ["isFollowed"],
};


export const rootReducer = {
        users: persistReducer(authPersistConfig, usersReducer), 
};



export const store = configureStore({
  reducer: rootReducer,
  middleware,
devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);