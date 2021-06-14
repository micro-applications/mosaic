import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Mosaic } from './components';
import reducers from './Example/reducers';
import './index.scss';

import Home from './Example/Home';


/**
 * @description Wire-up Mosaic Framework
 */
const routes = [<Route key="home" exact={true} path="/" component={Home} />];

function view() {
    return [
        <div key="header">Header</div>,
        <div key="container">
            <Switch>{routes}</Switch>
        </div>
    ];
}

Mosaic(view(), reducers);