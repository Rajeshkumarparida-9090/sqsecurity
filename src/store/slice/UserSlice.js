import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodo = createAsyncThunk('fetchTodo', async () => {
    const response = await axios.get('http://localhost:5000/users');
    return response.data; 
  });
export const addTodo = createAsyncThunk('addTodo', async (payload) => {
    const response = await axios.post('http://localhost:5000/users',payload);
    return response.data; 
  });
export const userEditTodo = createAsyncThunk('userEditTodo', async (id) => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    return response.data; 
  });
export const updateEditTodo = createAsyncThunk('updateEditTodo', async (payload) => {
    const response = await axios.put(`http://localhost:5000/users/${payload.id}`,payload);
    return response.data; 
  });
export const deleteUser = createAsyncThunk('deleteUser', async (id) => {
    const response = await axios.delete(`http://localhost:5000/users/${id}`);
    return response.data; 
  });


const todoUser = createSlice({
    name:"todoUser",
    initialState:{
        isLoading:false,
        data:[],
        error:false,
        isSuccess:false,
        personalData:{}
    },
    reducers: {
        clearError: (state) => {
            state.error = false;
        },
        clearSuccess: (state) => {
            state.isSuccess = false;
        },
    },
   
    extraReducers:(builder)=>{
        builder.addCase(fetchTodo.pending,(state,action)=>{
            state.isLoading=true
            state.isSuccess=false
        })
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
            state.personalData={};
            // state.isSuccess=true
        })
        builder.addCase(fetchTodo.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.isSuccess=false

        })

        builder.addCase(userEditTodo.pending,(state,action)=>{
            state.isLoading=true;
            state.isSuccess=false
        })
        builder.addCase(userEditTodo.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.personalData=action.payload;
            // state.isSuccess=true
        })
        builder.addCase(userEditTodo.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.isSuccess=false
        })

        builder.addCase(updateEditTodo.pending,(state,action)=>{
            state.isLoading=true;
            state.isSuccess=false;
        })
        builder.addCase(updateEditTodo.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.personalData=action.payload;
            state.isSuccess=true
        })
        builder.addCase(updateEditTodo.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.isSuccess=false;
        })

        builder.addCase(addTodo.pending,(state,action)=>{
            state.isLoading=true;
            state.isSuccess=false;
        })
        builder.addCase(addTodo.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=[...state.data, action.payload];
            state.isSuccess=true
        })
        builder.addCase(addTodo.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.isSuccess=false
        })

        builder.addCase(deleteUser.pending,(state,action)=>{
            state.isLoading=true;
            state.isSuccess=false
        })
        builder.addCase(deleteUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            // state.data = action.payload
            state.data = state.data.filter(todo => todo.id !== action.meta.arg);
            console.log("action.payload.id", action.payload)
            console.log(state.data.filter(todo => todo.id))
            state.isSuccess=true;
        })
        builder.addCase(deleteUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=true;
            state.isSuccess=false;
        })

    }
})
export const { clearError,clearSuccess } = todoUser.actions;
export default todoUser.reducer;