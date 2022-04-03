import {productTypes} from '../types/product.types';

const {SELECT_PRODUCT, FILTERED_PRODUCTS} = productTypes;

export const selectedProduct = productID => ({
  type: SELECT_PRODUCT,
  productID,
});

export const filteredProducts = id => ({
  type: FILTERED_PRODUCTS,
  categoryID: id,
});
