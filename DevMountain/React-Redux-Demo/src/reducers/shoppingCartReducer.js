/**
 * Created by cjpowers on 7/3/16.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function shoppingCartReducer(state={cart:initialState.cart}, action) {
  switch (action.type) {
    case types.LOAD_SHOPPING_CART_SUCCESS:
      console.log('this is the cart state',action.cart);
      return Object.assign({}, action.cart);
    case types.CREATE_SHOPPING_CART_SUCCESS:
      return {cart: action.cart};
    case types.UPDATE_SHOPPING_CART_SUCCESS:
      return Object.assign({}, action.cart);
    default:
      return state;
  }
}
