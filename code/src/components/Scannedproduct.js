import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NovaGroup } from './NovaGroup';
import { StartPage } from './StartPage';

export const ScannedProduct = () => {
  const list = useSelector((store) => store.products.items);
  console.log(list.length);

  if (list.length === 0) {
    return <StartPage />;
  } else {
    return (
      <>
        {list.map((item) => {
          if (item.products.status_verbose === 'product not found') {
            return <p>product not found</p>;
          } else {
            return (
              <div>
                <img
                  src={`${item.products.product.image_small_url}`}
                  alt='image of product'
                ></img>
                <p>{item.products.status_verbose}</p>
                <p>{item.products.product.product_name}</p>
                <p>{item.products.product.nutrition_grades_tags}</p>

                <NovaGroup group={item.products.product.nova_groups} />

                <p>{item.products.product.ingredients_analysis_tags}</p>
                <p>{item.products.product.ingredients_text_with_allergens}</p>
                <p>{item.products.product.ingredients_from_palm_oil_tags}</p>
              </div>
            );
          }
        })}
      </>
    );
  }
};
