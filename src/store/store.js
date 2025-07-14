import { configureStore } from '@reduxjs/toolkit';
import contactoReducer from './contactoSlice';
import carritoReducer from './carritoSlice';

export const store = configureStore({
  reducer: {
    carrito: carritoReducer,
    contacto: contactoReducer,
  },
});
