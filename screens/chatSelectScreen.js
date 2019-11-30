import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, AsyncStorage, View, Text, Navigator, PropTypes, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from "./style"
window.navigator.userAgent = 'ReactNative';

const SOCKET_URL = "http://localhost:8000/talk"

class ChatRoom extends Component {
 

  render() {
    return (
      <View style={style.container}>
       
      </View >
    );
  }

  handleBackPress = () => {
    // console.log ('volunteer', this.state.volunteer)
    // console.log ('user', this.state.user)
    if (this.state.volunteer === "true") {
      const {
        navigation: { navigate },
      } = this.props;
      navigate('Account');
    } else if (this.state.user === "true") {
      const {
        navigation: { navigate },
      } = this.props;
      navigate('Jobs');
    }
  }

}

module.exports = ChatRoom;