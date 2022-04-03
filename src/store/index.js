import {createStore, combineReducers} from 'redux';
import CategoryReducer from './reducers/CategoryReducer';
import ProductReducer from './reducers/ProductReducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
});

export default createStore(RootReducer);
