/**
 * Created by cjpowers on 7/1/16.
 */
import * as types from './actionTypes';

export function loadShopperProductsSuccess(products){
  return { type: types.LOAD_SHOPPER_PRODUCTS_SUCCESS, products };
}


let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export function loadShopperProducts(category) {
  let query = "";
  console.log('this is the category that was sent ', category);
  if(category) query = '?category' + category;
  return function(dispatch) {
    console.log('entered load dispatch');
    fetch(`http://localhost:3001/api/shopper/products/` + query,{method: 'get'})
      .then(response => {
        return response.json()})
      .then(data => {
        console.log(data);
        dispatch(loadShopperProductsSuccess(data))
      });
  };
}


