/**
 * Created by cjpowers on 6/26/16.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function userReducer(state={user:initialState.user, isUserLoggedIn: initialState.userIsLoggedIn}, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {user: action.user, isUserLoggedIn: true};
    case types.REGISTER_USER_SUCCESS:
          return {state};
    default:
      return state;
  }
}
