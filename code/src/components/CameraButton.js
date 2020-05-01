import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { products } from 'reducers/products';

export const CameraButton = () => {
  const dispatch = useDispatch();
  const [showCamera, setShowCamera] = useState(false);
  console.log(showCamera);

  const onDetected = (code) => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        dispatch(products.actions.setProducts(json));
        console.log(json);
      });
  };

  const handleBarCodeScanner = () => {
    setShowCamera(!showCamera);
  };

  return (
    <>
      {showCamera ? (
        <BarcodeScanner onDetected={onDetected} className='barcode-scanner' />
      ) : (
        ''
      )}
      <footer>
        <button className='camera-button' onClick={handleBarCodeScanner}>
          <i class='fas fa-camera-retro'></i>
        </button>
      </footer>
    </>
  );
};
