import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { products } from 'reducers/products';

export const CameraButton = () => {
  const dispatch = useDispatch();
  const [showCamera, setShowCamera] = useState(false);
  console.log(showCamera);

  const onDetected = (code) => {
    //return (dispatch) => {
    //dispatch(ui.actions.setLoading(true));
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) => {
        dispatch(products.actions.setProducts(json));
        console.log(json);
        //dispatch(ui.actions.setLoading(false));
      });
    //}
  };

  const handleBarCodeScanner = () => {
    setShowCamera(!showCamera);
  };

  return (
    <>
      {showCamera ? <BarcodeScanner onDetected={onDetected} /> : ''}
      <button className='camera-button' onClick={handleBarCodeScanner}>
        <i class='fas fa-camera-retro'></i>
      </button>
    </>
  );
};
