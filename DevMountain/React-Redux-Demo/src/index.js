/**
 * Created by cjpowers on 6/21/16.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadProducts} from './actions/productActions';
import {loadUsers} from './actions/userActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import initialState from './reducers/initialState';

//this accepts an initial state as a param, which is useful for initializing store with data  from server
const store = configureStore();
store.dispatch(loadProducts());
//store.dispatch(loadUsers());
console.log('This is what is in my store: ',store.getState());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
