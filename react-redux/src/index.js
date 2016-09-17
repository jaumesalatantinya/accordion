import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import injectTapEventPlugin from 'react-tap-event-plugin';
import 'reflex-grid/scss/reflex.scss';
import './styles/styles.scss';

injectTapEventPlugin();

ReactDOM.render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
