import { render } from 'react-dom';
import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import React from 'react';
import thunk from 'redux-thunk';
import reducers from './reducers';

//  Components.
import App from './components/App/AppContainer';
import Profile from './components/Profile/ProfileContainer';
import Registration from './components/Registration/RegistrationContainer';
import Login from './components/Login/LoginContainer';
import Home from './components/Home/HomeContainer';
import NotFound from './components/NotFound/NotFoundComponent';

//  Styles.
require('./styles/style.scss');

//  Use _key instead of  _k.
let history = createHistory({
  queryKey: '_key',
});

const browserMiddleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(browserMiddleware, thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

render((
  <Provider store={store} >
    <Router history={history} >
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/u/:username" component={Profile} />
        <Router path="404" component={NotFound} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
