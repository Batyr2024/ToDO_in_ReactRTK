import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const DEFAULT_URL = "http://localhost:3000/tasks/"

interface Args{
    query?:string[],
    body:string
}

export const fetchGetTasks = createAsyncThunk('data/fetchGetTasks',async(arg:Args,thunkApi)=>{
    try{
        const response = await axios.get(DEFAULT_URL)
        return response.data
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const fetchAddTasks = createAsyncThunk('data/fetchAddTasks',async(arg:Args,thunkApi)=>{
    try{
        await axios.post(DEFAULT_URL,{text:arg.body})
        const response = await axios.get(DEFAULT_URL)
        return response.data
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})