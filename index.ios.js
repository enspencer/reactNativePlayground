/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View
} from 'react-native';

class reactNativePlayground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Emma' />
        <Greeting name='Alex' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9db5d1',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
  },
});

class Greeting extends Component {
  render() {
    return <Text style={styles.heading}>Hello {this.props.name}!</Text>
  }
}

AppRegistry.registerComponent('reactNativePlayground', () => reactNativePlayground);