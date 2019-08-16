import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import "./index.css";
import App from "./components/App";
import { smurfReducer } from './reducers';

const store = createStore(smurfReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
