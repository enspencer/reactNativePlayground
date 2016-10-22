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
  constructor(props) {
    super(props);
    this.state = {firstLoad: true};
  }

  render() {
    let showWelcome = this.state.firstLoad ? 'Welcome!' : '';
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{showWelcome}</Text>
        <Greeting name='Emma' />
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
    padding: 20,
  },
  subheading: {
    fontSize: 20,
    textAlign: 'center',
  },
});

class Greeting extends Component {
  render() {
    return <Text style={styles.subheading}>Hello {this.props.name}!</Text>
  }
}

AppRegistry.registerComponent('reactNativePlayground', () => reactNativePlayground);