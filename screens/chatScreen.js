import React, { PureComponent, Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  View,
  Text,
  Navigator,
  PropTypes,
} from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import color from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import io from 'socket.io-client';
window.navigator.userAgent = 'ReactNative';
import defaultmessages from './message';
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
])

const SOCKET_URL = 'https://bwoke.herokuapp.com/talk';

class Chat extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      messages: [],
      room: '',
      userId: '',
    };
  }

  componentDidMount() {
    this.handleUser();
  }

  handleUser = async () => {
    try {
      let username = await AsyncStorage.getItem('username');
      let room = await AsyncStorage.getItem('room' || 'none');

      if (room === 'null') {
        this.handleBackPress();
        this.setState({ messages: defaultmessages });
      } else {
        this.setState({ userId: username });
        this.setMySocket(room);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

  setMySocket = async room => {
    // GET SOCKET ID AND SET THE STATE in local storage
    try {
      this.setState({ room: room });
      this.getMessages();
      this.socketEvents();
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

  socketEvents = () => {
    console.log('------ CONNECT EVENTS ------');

    this.socket = io.connect(SOCKET_URL, {
      jsonp: false,
      secure: true,
      reconnection: true,
      reconnectionDelay: 500,
      reconnectionAttempts: Infinity,
      transports: ['websocket', 'polling'],
    });

    console.log('Room', this.state.room);

    this.socket.on('connected_success', () => {
      this.setState({ isConnected: true });
      this.socket.emit('room', this.state.room);
      console.log('connected? yes! and connecting to room');
    });

    this.socket.on('disconnection', () => {
      this.chatEnded();
      console.log('Connection is disconnected');
    });

    // recieve message
    this.socket.on('broadcast', messages => {
      this._storeMessages(messages);
      console.log('received', messages);
    });
  };

  getMessages = () => {
    fetch(`https://bwoke.herokuapp.com/chat/${this.state.room}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(response => {
        if (response.results === 'none') {
          console.log("no previous messages");
        } else {
          for (let message of response) {
            this._storeMessages(message);
          }
        }
      })
      .catch(err => console.warn(err));
  };

  componentWillUnmount() {}

  // message events below ========================================================

  // Event listeners

  /**
   * When a message is sent, send the message to the server
   * and store it in this component's state.
   */
  onSend = (messages = []) => {
    let messageText = messages[0].text;
    let message = messages[0];
    let date = messages[0].createdAt;
    let user = this.state.userId;
    let room = this.state.room;

    this.socket.emit('chat message', {
      message: message,
      room: room,
    });

    console.log('messages', this.state.messages);

    this._storeMessages(messages);

    fetch('https://bwoke.herokuapp.com/chat', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: messageText,
            user: user,
            room: room,
        }),
    }).then(res => res.json())
        .then(response => {
            console.log('message posted');
        })
        .catch(err => console.warn(err));
  };

  // Helper functions
  _storeMessages = messages => {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name={
              Platform.OS === 'ios' ? 'ios-arrow-dropleft' : 'md-arrow-dropleft'
            }
            size={30}
            style={styles.back}
            onPress={this.handleBackPress}
          />
        </View>
        {/* // this is the socket IO chat */}
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: this.state.userId,
            name: this.state.userId,
          }}
          shouldUpdateMessage={() => true}
        />
      </View>
    );
  }

  handleBackPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Room');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
    backgroundColor: color.white,
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    marginTop: 55,
  },
  back: {
    color: color.blue4,
    marginBottom: 0,
    paddingVertical: 0,
  },
});

Chat.navigationOptions = {
  header: null,
};

export default Chat;
