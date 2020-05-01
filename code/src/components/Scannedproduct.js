import React from 'react';
import { useSelector } from 'react-redux';
import { NovaGroup } from './NovaGroup';
import { StartPage } from './StartPage';
import { NotFound } from './NotFound';

export const ScannedProduct = () => {
  const list = useSelector((store) => store.products.items);

  if (list.length === 0) {
    return <StartPage />;
  }

  else {
    return (
      <>
        {list.map((item) => {

          if (item.products.status_verbose === 'product not found') {
            return <NotFound />;
          }
          else if (item.products.code === '' || item.products.code === null) {
            return <NotFound />;
          }
          else {

            const formattedIngredients = item.products.product.additives_tags.map((ingredient) => (
              ingredient
                .replace('en:', '')
                .replace('-', ' ')
            ))

            const palmOilIngredients = item.products.product.ingredients_that_may_be_from_palm_oil_tags.map((ingredient) => ( ingredient
              .replace('-', ' ')
              )
            )

            const productNameBrand = [];
            if (item.products.product.brands && item.products.product.brands !== "")
              productNameBrand.push(item.products.product.brands);

            if (item.products.product.product_name && item.products.product.product_name !== "")
              productNameBrand.push(item.products.product.product_name);

            return (
              <div className='scanned-product'>

                {item.products.product.image_small_url &&
                  <img
                    src={`${item.products.product.image_small_url}`}
                    alt='image of product'
                  ></img>}

                <div className="product-brand">
                  <h2>{productNameBrand.join(", ")}</h2>
                </div>

                <p>
                  <span className='bold'>Category: </span>
                  {item.products.product.pnns_groups_1}
                </p>

                <NovaGroup group={item.products.product.nova_group} />

                <p>
                  <span className='bold'>Labels: </span>
                  {item.products.product.labels}
                </p>
                <p>
                  <span className='bold'>Ingredients: </span>
                  {item.products.product.ingredients_text}
                </p>
                <p>
                  <span className='bold'>Additives: </span>
                  {formattedIngredients.join(", ")}
                </p>
                <p>
                  <span className='bold'>Ingredients that may be from palm oil: </span>
                  {palmOilIngredients.join(", ")}
                </p>
              </div>
            );
          }
        })}
      </>
    );
  }
};
