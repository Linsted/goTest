import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://6444e050b80f57f581ac9054.mockapi.io";



export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
    async (PER_PAGE, thunkAPI) => {
      
    try {
        const response = await axios.get(`/users?p=1&l=${PER_PAGE}`, );
        // console.log(response)
        return response.data;
        
    } catch (e) {
        console.log("Error")
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addUsers = createAsyncThunk(
  "users/addUsers",
    async ({PER_PAGE, currentPage}, thunkAPI) => {
      
        try {
        console.log(currentPage)
        const response = await axios.get(`/users?p=${currentPage}&l=${PER_PAGE}`, );
        // console.log(response);
        return response.data;
        
    } catch (e) {
        console.log("Error")
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);