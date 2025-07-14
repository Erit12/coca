// src/store/carritoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    items: [], // [{ id, nombre, precio, cantidad }]
  },
  reducers: {
    agregarAlCarrito: (state, action) => {
      const producto = action.payload;
      const itemExistente = state.items.find(item => item.id === producto.id);
      if (itemExistente) {
        itemExistente.cantidad += 1;
      } else {
        state.items.push({ ...producto, cantidad: 1 });
      }
    },
    quitarDelCarrito: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    vaciarCarrito: (state) => {
      state.items = [];
    },
  },
});

export const { agregarAlCarrito, quitarDelCarrito, vaciarCarrito } = carritoSlice.actions;
export default carritoSlice.reducer;
