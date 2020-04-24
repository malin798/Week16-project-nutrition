import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { products } from 'reducers/products'
import { Input } from './components/Input';

// Fixa thunk
// set up store
// reducers
// spara input i en state - för att kunna skicka in state i onDetected
// component: input
// component: isvegan
// component: ingredients analysis (gluten, palmoil, vegan)

const reducer = combineReducers({ products: products.reducer });

const store = configureStore({reducer});

export const App = () => {


  return (
    <Provider store={store}>
      < Input />
            
    </Provider>
  );
};
