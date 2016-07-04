import * as types from './actionTypes';
import userApi from '../api/mockUserApi';

export function loadProductsSuccess(products){
  return { type: types.LOAD_PRODUCTS_SUCCESS, products }
}

export function loadUsersSuccess(users){
  return { type: types.LOAD_USERS_SUCCESS, users }
}
export function loginUserSuccess(user){
  return { type: types.LOGIN_USER_SUCCESS, user }
}

export function createCartSuccess(cart){
  return { type: types.CREATE_SHOPPING_CART_SUCCESS, cart}
}

export function updateCartSuccess(cart) {
  return { type: types.UPDATE_SHOPPING_CART_SUCCESS, cart}
}

let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export function loadUsers() {
  return function(dispatch) {
    //make actual call to server here
    fetch('http://localhost:3001/api/users', {method: 'get'})
      .then(response => {
        return response.json()
      }).then(data => dispatch(loadUsersSuccess(data)));
  }
}

export function loadProducts(userId) {
  return function(dispatch) {
    console.log('entered load dispatch');
    fetch(`http://localhost:3001/api/products/` + userId, {method: 'get'})
      .then(response => {
        console.log('This is my response when loading products', response);
        return response.json()})
      .then(data => dispatch(loadProductsSuccess(data)));
  }
}

export function loginUser(user) {
  return function(dispatch, getState) {
    fetch('http://localhost:3001/api/user/authenticate',
      {
        method: 'post',
        headers: myHeaders,
        mode: 'cors',
        body: JSON.stringify(user)
      })
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(user => {
        console.log(user);
        dispatch(loginUserSuccess(user));
      })

  }
}

export function updateCart(userid, productid, cartid, quantity=1, cart) {
  console.log('entered update cart function');
  let cartitem = {
    userid: userid,
    cartid: cartid,
    productid: productid,
    quantity: quantity
  };
  let isUpdate = false;
  for(let i = 0; i < cart.length; i++){
    console.log('here is the productid passed in ',productid,' and here is the product id we are comparing to ',cart[i].productid )
    if(cart[i].productid == productid){
      return function (dispatch, getState) {
        isUpdate = true;
        console.log('entered the put for updating cart item');
        cartitem.id = cart[i].id;
        cartitem.quantity= cart[i].quantity + 1;
        fetch('http://localhost:3001/api/cart',
          {
            method: 'put',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify(cartitem)
          })
          .then(response => {
            console.log(response);
            return response.json()
          })
          .then(cart => {
            console.log(cart);
            dispatch(updateCartSuccess(cart));
          })
      }
    }
  }
  if(isUpdate===false) {
    return function (dispatch, getState) {
      console.log('heres the cart item', cartitem);
      if (!cartitem.cartid) {
        console.log('entered the if statement');
        fetch('http://localhost:3001/api/cartcreate',
          {
            method: 'post',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify(cartitem)
          })
          .then(response => {
            console.log(response);
            return response.json()
          })
          .then(cart => {
            console.log(cart);
            cartitem = cart;
            dispatch(createCartSuccess(cart));
            fetch('http://localhost:3001/api/cart',
              {
                method: 'post',
                headers: myHeaders,
                mode: 'cors',
                body: JSON.stringify(cartitem)
              })
              .then(response => {
                console.log(response);
                return response.json()
              })
              .then(cart => {
                console.log(cart);
                dispatch(updateCartSuccess(cart));
              })
          })
      }
      else {
        fetch('http://localhost:3001/api/cart',
          {
            method: 'post',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify(cartitem)
          })
          .then(response => {
            console.log(response);
            return response.json()
          })
          .then(cart => {
            console.log(cart);
            dispatch(updateCartSuccess(cart));
          })
      }
    }
  }
}

/**
 * Created by cjpowers on 7/3/16.
 */
