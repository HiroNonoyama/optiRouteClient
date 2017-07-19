import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SignUp from './components/signUp';
import Search from './components/search';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="signUp" component={SignUp} hideNavBar={true} />
          <Scene key="search" component={Search} title="search" />
        </Scene>
      </Router>
    )
  }
}
