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
  DeviceEventEmitter
} from 'react-native';
import Apps from './HomePage'
import App from './APP'
export default class AwesomeProject extends Component {
  constructor(props) {
        super(props);
        this.state = {
            userNames:2
        };
        console.log(this.props);
    }
  componentDidMount() {
    DeviceEventEmitter.addListener('Changeroute',(userName) =>{
              this.setState({
                userNames:userName
              })
        })      
  };
  componentWillUnmount() {
    DeviceEventEmitter.remove();  
}

  render() {
   
    return (
      this.state.userNames==2?
      <Apps/>
      :
      <App/>
    );
  }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
