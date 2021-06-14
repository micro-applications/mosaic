import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './configureStore';
import reportWebVitals from './reportWebVitals';
import mosaic from './Reducers';

/**
 * Entry point for Mosaic Framework
 * @param {*} view The view to inject
 * @param {*} reducers the reducers that a domain uses
 * @param {*} loggerConfig configuration data for logging
 */
const Mosaic = (view, reducers) => {
    const store = configureStore(
        combineReducers({
            app: reducers,
            mosaic,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>{view}</BrowserRouter>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();
};

export default Mosaic;