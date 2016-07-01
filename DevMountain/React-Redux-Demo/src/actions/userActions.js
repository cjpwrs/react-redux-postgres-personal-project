/**
 * Created by cjpowers on 6/26/16.
 */
import * as types from './actionTypes';
import userApi from '../api/mockUserApi';

export function loadUsersSuccess(users){
  return { type: types.LOAD_USERS_SUCCESS, users }
}
export function loginUserSuccess(user){
  return { type: types.LOGIN_USER_SUCCESS, user }
}

export function registerUserSuccess(user){
  return { type: types.REGISTER_USER_SUCCESS, user }
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

export function registerUser(user) {
  return function(dispatch, getState) {
    fetch('http://localhost:3001/api/user/register',
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
        dispatch(registerUserSuccess(user));
      })
  }
}
