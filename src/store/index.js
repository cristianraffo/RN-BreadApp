import {createStore, combineReducers, applyMiddleware} from 'redux';
import CategoryReducer from './reducers/category.reducer';
import ProductReducer from './reducers/product.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
