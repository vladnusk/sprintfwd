import userReducer from './slices/user'
import teamReducer from './slices/team'
import todoReducer from './slices/todo'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
 user: userReducer,
 team: teamReducer,
 todo: todoReducer
  });
  
  export { rootReducer }