/**
 * Created by cjpowers on 6/25/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ProductPage from './components/product/ProductPage';
import ManageProductPage from './components/product/ManageProductPage';
import LoginUser from './components/user/LoginUser';
import RegisterUser from './components/user/RegisterUser';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="products" component={ProductPage} />
    <Route path="product" component={ManageProductPage} />
    <Route path="product/:id" component={ManageProductPage} />
    <Route path="about" component={AboutPage} />
    <Route path="user/signin" component={LoginUser} />
    <Route path="user/register" component={RegisterUser} />
  </Route>
);
