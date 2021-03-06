import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import * as serviceWorker from './serviceWorker';

// import css styles
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

// import reducers
import authReducer from './store/reducers/authReducer';
import wordlistReducer from './store/reducers/wordlistReducer';
import errorsReducer from './store/reducers/errorReducer';
import languageReducer from './store/reducers/languageReducer';
import wordReviewReducer from './store/reducers/wordReviewReducer';
import statsReducer from './store/reducers/statsReducer';

// combine reducer to root reducer
const rootReducer = combineReducers({
    auth: authReducer,
    wordlist: wordlistReducer,
    language: languageReducer,
    errors: errorsReducer,
    wordReview: wordReviewReducer,
    stats: statsReducer
});

//enable redux DevTools for browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store for redux
const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
