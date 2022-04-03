import {categories} from '../../constants/categories';

const initialState = {
  categories: categories,
  selectedCategory: null,
};

const CategoryReducer = (state = initialState, action) => {
  return state;
};

export default CategoryReducer;
