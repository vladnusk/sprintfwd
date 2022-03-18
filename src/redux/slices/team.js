import { dispatch } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    error: false,
    teamList: []
}

const slice = createSlice({
    name: 'team',
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
      // GET TEAM LIST
      getTeamListSuccess(state, action){
          state.isLoading = false;
          state.teamList = action.payload;
      }
    }
})

// Reducer
export default slice.reducer;

export function getTeamList(){
    return async () => {
        dispatch(slice.actions.startLoading())
        try {
            const response = await axios.get(`./teams.json`)
            dispatch(slice.actions.getTeamListSuccess(response.data.teams));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}