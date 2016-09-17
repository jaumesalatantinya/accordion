import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="product-list" component={ProductList} />
        <Route path="about-us" component={AboutUs} />
        <Route path="product-detail" component={ProductDetail} />
    </Route>
);