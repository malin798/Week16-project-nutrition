import { createSlice } from '@reduxjs/toolkit';

export const products = createSlice({
  name: 'products',
  initialState: {
    items: [],
  },
  reducers: {
    setProducts: (state, action) => {
      const { todoInfo } = action.payload;
      console.log(todoInfo);
      //state.items.push({ products: action.payload });
    },
  },
});
