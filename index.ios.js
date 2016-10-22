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
  View,
  TextInput
} from 'react-native';

class reactNativePlayground extends Component {
  constructor(props) {
    super(props);
    this.state = {firstLoad: true, text: ''};
  }

  render() {
    let showWelcome = this.state.firstLoad ? 'Welcome!' : '';
    return (
      <View style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.heading}>{showWelcome}</Text>
          <TextInput
            style={styles.textbox}
            placeholder="What is your name?"
            autoCorrect={false}
            onSubmitEditing={(event) => this.setState({text: event.nativeEvent.text})}
          />
        </View>
        <View style={styles.container2}>
          <Greeting name={this.state.text} />
        </View>
        <View style={styles.container} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  container2: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
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
  textbox: {
    height: 40,
  }
});

class Greeting extends Component {
  render() {
    let message = this.props.name ? "Hello " + this.props.name : '';
    return <Text style={styles.subheading}>{message}</Text>
  }
}

AppRegistry.registerComponent('reactNativePlayground', () => reactNativePlayground);