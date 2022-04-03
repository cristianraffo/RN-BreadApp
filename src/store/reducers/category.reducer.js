import {categories} from '../../constants/categories';
import {categoryTypes} from '../types/category.types';

const {SELECT_CATEGORY} = categoryTypes;

const initialState = {
  categories: categories,
  selectedCategory: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const indexCategory = state.categories.findIndex(
        category => category.id === action.categoryID,
      );

      if (indexCategory === -1) return state;
      return {
        ...state,
        selectedCategory: state.categories[indexCategory],
      };
    default:
      return state;
  }
};

export default CategoryReducer;
