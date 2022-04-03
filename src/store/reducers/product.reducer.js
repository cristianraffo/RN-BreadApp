import {products} from '../../constants/products';

const initialState = {
  products: products,
  filteredProducts: [],
  selectedProduct: null,
};

const ProductReducer = (state = initialState, action) => {
  return state;
};

export default ProductReducer;
