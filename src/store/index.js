import {createStore, combineReducers, applyMiddleware} from 'redux';
import CategoryReducer from './reducers/category.reducer';
import ProductReducer from './reducers/product.reducer';
import cartReducer from './reducers/cart.reducer';
import authReducer from './reducers/auth.reducer';
import thunk from 'redux-thunk';


const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
  cart: cartReducer,
  auth: authReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
