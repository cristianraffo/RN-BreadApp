import {createStore, combineReducers, applyMiddleware} from 'redux';
import CategoryReducer from './reducers/category.reducer';
import ProductReducer from './reducers/product.reducer';
import cartReducer from './reducers/cart.reducer';
import thunk from 'redux-thunk';


const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
  cart: cartReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
