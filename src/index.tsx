import React from 'react';
import {render} from "react-dom";
import {createStore, compose} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/rootReducer";
import './style.scss';
import {App} from "./App";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

let root = document.getElementById('root');
render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);