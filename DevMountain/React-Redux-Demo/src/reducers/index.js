/**
 * Created by cjpowers on 6/26/16.
 */
import {combineReducers} from 'redux';
import products from './productReducer';
import user from './userReducer';
import shopperProducts from './shopperProductReducer';

const rootReducer = combineReducers({
  products, user, shopperProducts
});

export default rootReducer;
