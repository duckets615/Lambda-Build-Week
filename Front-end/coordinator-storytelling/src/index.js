import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './components/store/reducers'

import App from './App';

const store = createStore(
    rootReducer,
    applyMiddleware( thunk, logger )
)

const AppWithRouter = withRouter(App)

ReactDOM.render(
<Provider store={store}>
    <Router>
        <AppWithRouter />
    </Router>
</Provider>
, document.getElementById('root'));