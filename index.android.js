/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppRoutes from './src/routes'

export default class xlab extends Component {
  render() {
    return (
      <AppRoutes />
    );
  }
}

AppRegistry.registerComponent('xlab', () => xlab);
