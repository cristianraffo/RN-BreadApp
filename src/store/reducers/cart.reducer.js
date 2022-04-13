import { cart } from '../../constants/cart';

const initialState = {
    items: cart,
    total: 34.97,
}

const cartReducer = (state = initialState, action) => {
    return state;
}

export default cartReducer;