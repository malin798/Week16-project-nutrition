import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NovaGroup } from './NovaGroup';
import { StartPage } from './StartPage';
import { NotFound } from './NotFound';

export const ScannedProduct = () => {
  const list = useSelector((store) => store.products.items);

  if (list.length === 0) {
    return <StartPage />;
  } else {
    return (
      <>
        {list.map((item) => {
          if (item.products.status_verbose === 'product not found') {
            return <NotFound />;
          } else {
            return (
              <div className='scanned-product'>
                <img
                  src={`${item.products.product.image_small_url}`}
                  alt='image of product'
                ></img>
                {/* <p>{item.products.status_verbose}</p> */}
                <h2>
                  {item.products.product.brands},{' '}
                  {item.products.product.product_name}
                </h2>
                {/* <p>{item.products.product.nutrition_grades_tags}</p> */}
                <p>
                  <span className='bold'>Category: </span>
                  {item.products.product.pnns_groups_1}
                </p>

                <NovaGroup group={item.products.product.nova_groups} />

                <p>
                  <span className='bold'>Labels: </span>
                  {item.products.product.labels}
                </p>
                <p>
                  <span className='bold'>Ingredients: </span>{' '}
                  {item.products.product.ingredients_text}
                </p>
                <p>
                  <span className='bold'>Ingredients from palm oil:</span>
                  {item.products.product.ingredients_from_palm_oil_tags}
                </p>
              </div>
            );
          }
        })}
      </>
    );
  }
};
