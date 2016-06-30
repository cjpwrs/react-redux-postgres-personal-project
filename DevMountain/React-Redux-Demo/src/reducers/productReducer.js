/**
 * Created by cjpowers on 6/26/16.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function productReducer(state=initialState.products, action) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
          return action.products;
    case types.CREATE_PRODUCT_SUCCESS:
      console.log(action.product);
          return [
            ...state,
            Object.assign({}, action.product)
          ];
    case types.UPDATE_PRODUCT_SUCCESS:
          return [
            ...state.filter(product => product.id !== action.product.id),
            Object.assign({}, action.product)
          ];
    case types.DELETE_PRODUCT_SUCCESS:
    { var test = [...state.filter(product => product.id !== action.product.id)];
      console.log(test);
      console.log(action);
          return [
            ...state.filter(product => product.id !== action.product.id)//,
            //Object.assign({}, action.product)
          ];}
    default:
          return state;
  }
}
