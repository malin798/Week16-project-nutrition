import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import { products } from './reducers/products';

// Fixa thunk
// set up store
// reducers
// spara input i en state - för att kunna skicka in state i onDetected
// component: input
// component: isvegan
// component: ingredients analysis (gluten, palmoil, vegan)

const reducer = combineReducers({ products: products.reducer });

const store = createStore(reducer);

export const App = () => {
  const [scanned, setScanned] = useState();
  const dispatch = useDispatch();
  console.log(scanned);

  const onDetected = (code, dispatch) => {
    return (dispatch) => {
      //dispatch(ui.actions.setLoading(true));
      fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
        .then((data) => data.json())
        .then((json) => {
          dispatch(products.actions.setProducts(json));
          console.log(json);
          //dispatch(ui.actions.setLoading(false));
        });
      setScanned('');
    };
  };

  return (
    <Provider store={store}>
      <div>
        <form
          onSubmit={(event) => {
            onDetected(scanned);
            event.preventDefault();
          }}
        >
          <label>
            {' '}
            Test codes here:{' '}
            <input type='text' onChange={(e) => setScanned(e.target.value)} />
          </label>
          <button type='submit'>Submit</button>
        </form>
        <p>
          {' '}
          Use the field above to test barcodes manually and keep an eye on your
          console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
        </p>
        <BarcodeScanner onDetected={() => onDetected()}></BarcodeScanner>
      </div>
    </Provider>
  );
};
