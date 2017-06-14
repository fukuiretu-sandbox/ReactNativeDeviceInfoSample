/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import * as Keychain from 'react-native-keychain';

const username = 'zuck';
const password = 'poniesRgr8';

export default class ReactNativeDeviceInfoSample extends Component {
  setKeychain() {
    console.log('call setKeychain...')
    Keychain
      .setGenericPassword(username, password)
      .then(function() {
        console.log('Credentials saved successfully!');
      });
  }

  getKeychain() {
    Keychain
      .getGenericPassword()
      .then(function(credentials) {
        console.log('Credentials successfully loaded for user ' + credentials.username);
      }).catch(function(error) {
        console.log('Keychain couldn\'t be accessed! Maybe no value set?', error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text>
          Device Unique ID:{ DeviceInfo.getUniqueID() }
        </Text>
        <Button
          onPress={this.setKeychain}
          title="setKeychain"
          color="#841584"
        />
        <Button
          onPress={this.getKeychain}
          title="getKeychain"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeDeviceInfoSample', () => ReactNativeDeviceInfoSample);
