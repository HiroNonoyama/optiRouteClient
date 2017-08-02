import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import createLogger from 'redux-logger';
import { Scene, Router } from 'react-native-router-flux';
import reducers from './reducers';

const RouterWithRedux = connect()(Router);

import SignUp from './components/signUp';
import Search from './components/search';

const loggerMiddleware = createLogger();
const middleware = [loggerMiddleware];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="signUp" component={SignUp} hideNavBar={true} />
            <Scene key="search" component={Search} hideNavBar={true} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}
  