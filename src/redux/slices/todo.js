import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: []
}

const slice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      getTodoList(state){
        const savedTodos = localStorage.getItem("todos");
          state.isLoading = false;
          state.todoList = JSON.parse(savedTodos) || [];
      },
      addTodo(state, action){
          state.todoList = [...state.todoList, action.payload].flat()
          localStorage.setItem("todos", JSON.stringify(state.todoList));
      },
      deleteTodo(state, action){
          state.todoList = state.todoList.filter(todo => todo.id !== action.payload)
          localStorage.setItem("todos", JSON.stringify(state.todoList));
      },
      toggleComplete(state, action) {
          state.todoList = state.todoList.map((todo) => {
           if(todo.id === action.payload){
            return {
                ...todo,
                isActive: !todo.isActive
            }
           } else return todo
            })
            localStorage.setItem("todos", JSON.stringify(state.todoList));
      },
      updateTodo(state, action) {
        state.todoList = state.todoList.map((todo) => {
         if(todo.id === action.payload.id){
          return {
              ...todo,
              value: action.payload.value
          }
         } else return todo
          })
          localStorage.setItem("todos", JSON.stringify(state.todoList));
    }
    }
})

// Reducer
export default slice.reducer;

export const { addTodo, deleteTodo, getTodoList, toggleComplete, updateTodo } =
  slice.actions;
