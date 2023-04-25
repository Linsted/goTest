import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://6444e050b80f57f581ac9054.mockapi.io";



export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
    async (PER_PAGE, thunkAPI) => {
      
    try {
        const response = await axios.get(`/users?p=1&l=${PER_PAGE}`, );
   
        return response.data;
        
    } catch (e) {

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addUsers = createAsyncThunk(
  "users/addUsers",
    async ({PER_PAGE, currentPage}, thunkAPI) => {
      
        try {

        const response = await axios.get(`/users?p=${currentPage}&l=${PER_PAGE}`, );

        return response.data;
        
    } catch (e) {

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);