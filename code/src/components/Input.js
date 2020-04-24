import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { products } from 'reducers/products'

export const Input = () => {
  const [scanned, setScanned] = useState();
  const dispatch = useDispatch();
  console.log(scanned);

  const onDetected = (scanned) => {
    console.log(scanned)

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
  }

  return (
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
        <input 
          type='text' 
          onChange={(event) => setScanned(event.target.value)} 
        />
        </label>

        <button type='submit'>Submit</button>
      </form>

      <p>
        {' '}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
      </p>

      < BarcodeScanner 
      // onDetected={() => onDetected()}
      ></BarcodeScanner>
    </div>
  )


}
