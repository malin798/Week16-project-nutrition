import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { products } from 'reducers/products';

export const Input = () => {
  const [scanned, setScanned] = useState();
  const dispatch = useDispatch();
  console.log(scanned);

  const onDetected = (scanned) => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${scanned}.json`)
      .then((data) => data.json())
      .then((json) => {
        dispatch(products.actions.setProducts(json));
        console.log(json);
      });
    setScanned('');
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          onDetected(scanned);
          event.preventDefault();
        }}
      >
        <label>
          <input
            required
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
    </>
  );
};
