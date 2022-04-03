import {products} from '../../constants/products';
import {productTypes} from '../types/product.types';

const {SELECT_PRODUCT, FILTERED_PRODUCTS} = productTypes;

const initialState = {
  products: products,
  filteredProducts: [],
  selectedProduct: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: state.products.find(
          product => product.id === action.productID,
        ),
      };
    case FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          product => product.category === action.categoryID,
        ),
      };
    default:
      return state;
  }
};

export default ProductReducer;
