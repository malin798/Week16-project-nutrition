import React, { useState } from 'react';
import { BarcodeScanner } from 'components/BarcodeScanner';

// Fixa thunk
// set up store
// reducers
// spara input i en state - för att kunna skicka in state i onDetected
// component: input
// component: isvegan
// component: ingredients analysis (gluten, palmoil, vegan)

export const App = () => {
  const [scanned, setScanned] = useState();

  console.log(scanned);

  const onDetected = (event, code) => {
    event.preventDefault();
    console.log(`Code: ${code}`);
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
      });
    setScanned('');
  };

  return (
    <div>
      <form onSubmit={() => onDetected(scanned)}>
        <label>
          {' '}
          Test codes here:{' '}
          <input
            type='text'
            onChange={(e) => setScanned(e.target.value)}
          ></input>
        </label>
        <button type='submit'>Submit</button>
      </form>
      <p>
        {' '}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
      </p>
      <BarcodeScanner onDetected={onDetected}></BarcodeScanner>
    </div>
  );
};
