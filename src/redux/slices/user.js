import { dispatch } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    error: false,
    userList: []
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
         // START LOADING
    startLoading(state) {
        state.isLoading = true;
      },
       // HAS ERROR
    hasError(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      // GET USER LIST
      getUserListSuccess(state, action){
          state.isLoading = false;
          state.userList = action.payload;
      }
    }
})

// Reducer
export default slice.reducer;

export function getUserList(){
    return async () => {
        dispatch(slice.actions.startLoading())
        try {
            const response = await axios.get(`users.json`, {baseURL:'/'})
            dispatch(slice.actions.getUserListSuccess(response.data.members));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}