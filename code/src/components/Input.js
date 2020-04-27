import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { products } from 'reducers/products';

export const Input = () => {
  const [scanned, setScanned] = useState();
  const dispatch = useDispatch();
  console.log(scanned);

  const onDetected = (scanned) => {
    //return (dispatch) => {
    //dispatch(ui.actions.setLoading(true));
    fetch(`https://world.openfoodfacts.org/api/v0/product/${scanned}.json`)
      .then((data) => data.json())
      .then((json) => {
        dispatch(products.actions.setProducts(json));
        console.log(json);
        //dispatch(ui.actions.setLoading(false));
      });
    setScanned('');
    //}
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          onDetected(scanned);
          event.preventDefault();
        }}
      >
        <label>
          <input
            type='text'
            value={scanned}
            placeholder='Enter your barcode'
            onChange={(event) => setScanned(event.target.value)}
          />
        </label>

        <button className='input-button' type='submit'>
          Check
        </button>
      </form>
    </div>
  );
};
