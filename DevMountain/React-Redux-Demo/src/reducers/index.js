/**
 * Created by cjpowers on 6/26/16.
 */
import {combineReducers} from 'redux';
import products from './productReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  products, user
});

export default rootReducer;
