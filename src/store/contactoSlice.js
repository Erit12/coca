// src/store/contactoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nombre: '',
  email: '',
  mensaje: '',
};

const contactoSlice = createSlice({
  name: 'contacto',
  initialState,
  reducers: {
    setCampo: (state, action) => {
      const { campo, valor } = action.payload;
      state[campo] = valor;
    },
    limpiarFormulario: () => initialState,
  },
});

export const { setCampo, limpiarFormulario } = contactoSlice.actions;
export default contactoSlice.reducer;
