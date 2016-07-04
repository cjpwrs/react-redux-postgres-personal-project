/**
 * Created by cjpowers on 6/26/16.
 */
import {combineReducers} from 'redux';
import products from './productReducer';
import user from './userReducer';
import shopperProducts from './shopperProductReducer';
import cart from './shoppingCartReducer';

const rootReducer = combineReducers({
  products, user, shopperProducts, cart
});

export default rootReducer;
