/**
 * Created by cjpowers on 7/1/16.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function shopperProductReducer(state=initialState.shopperProducts, action) {
  switch (action.type) {
    case types.LOAD_SHOPPER_PRODUCTS_SUCCESS:
      return action.products;
    default:
      return state;
  }
}
