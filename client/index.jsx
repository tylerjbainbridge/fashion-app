import React, { createClass } from 'react';
import { render } from 'react-dom';
import { createHistory } from 'history'
// import createHistory from 'history/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import { Router, Route, IndexRoute, browserHistory, Link, withRouter } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux'
require('./Styles/style.scss');

// Use _key instead of _k.
let history = createHistory({
  queryKey: '_key'
});

const browserMiddleware = routerMiddleware(history); // Added this line
const createStoreWithMiddleware = applyMiddleware(browserMiddleware, thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

//Components
import App from './App/AppContainer';
import User from './User/UserContainer';
import Registration from './Registration/RegistrationContainer';
import Login from './Login/LoginContainer';

render((
  <Provider store = { store }>
    <Router history = { history }>
      <Route path = "/" component = { App } >
        <IndexRoute component = { Login } />
        <Route path = "/login" component = { Login }/>
        <Route path = "/register" component = { Registration }/>
        <Route path ='/user' component = { User }/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
