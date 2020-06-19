// ie 보기 위함
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/reset.css';
import './css/global.css';
// redux init
import { createStore, applyMiddleware, compose } from 'redux';
import { rootEpic, rootReducer } from './redux/root';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

const observableMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(observableMiddleware)));

observableMiddleware.run(rootEpic);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
