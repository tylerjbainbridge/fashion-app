import React, { createClass } from 'react';
import { render } from 'react-dom';
import { createHistory } from 'history'
// import createHistory from 'history/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import { updateForm } from './actions';
import { Router, Route, IndexRoute, browserHistory, Link, withRouter } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux'


// Use _key instead of _k.
let history = createHistory({
  queryKey: '_key'
});

const browserMiddleware = routerMiddleware(history); // Added this line
const createStoreWithMiddleware = applyMiddleware(browserMiddleware, thunk)(createStore)

const store = createStoreWithMiddleware(reducers)

// const store = createStore(
//   reducers,
//   applyMiddleware(thunk)
// );
//
// const history = syncHistoryWithStore(createBrowserHistory, store)

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)


//Authentication Check
// import authCheck from './authCheck';

//Components
import App from './components/App';
import UserContainer from './containers/userContainer';
import RegFormCont from './containers/RegFormCont';
import LoginForm from './containers/loginContainer';

// import EditProfile from './EditProfile';
// import LoginForm from './LoginForm';

render((
  <Provider store = { store }>
    <Router history = { history }>
      <Route path = "/" component = { App } />
      <Route path = "/login" component = { LoginForm }/>
      <Route path = "/register" component = { RegFormCont }/>
      <Route path ='/user' component = { UserContainer }/>
    </Router>
  </Provider>
), document.getElementById('app'));
