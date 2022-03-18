import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});


const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export { store, dispatch, useSelector, useDispatch };
