/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import ChatComponent from './src/components/ChatComponent'

export default class xlab extends Component {
  render() {
    return (
      <ChatComponent />
    );
  }
}

AppRegistry.registerComponent('xlab', () => xlab);
