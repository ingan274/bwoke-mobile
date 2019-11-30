import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, AsyncStorage, View, Text, Navigator, PropTypes, StyleSheet } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat'
import { Ionicons } from '@expo/vector-icons';
import style from "./style"
import io from 'socket.io-client';
window.navigator.userAgent = 'ReactNative';

const SOCKET_URL = "http://localhost:8000/talk"

class ChatRoom extends Component {
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
        this.handleUser()
        this.socketEvents()
    }

    handleUser = async () => {
        try {
            let username = await AsyncStorage.getItem('username');
            let room = await AsyncStorage.getItem('room');

            this.setState({ userId: username })
            this.setMySocket(room)

        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    setMySocket = async (room) => {
        // GET SOCKET ID AND SET THE STATE in local storage
        try {
            this.setState({ room: room })
            this.socketEvents()
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    //${this.state.socketNum}
    socketEvents = () => {
        console.log("------ CONNECT EVENTS ------")

        this.socket = io.connect(SOCKET_URL, {
            jsonp: false,
            secure: true,
            reconnection: true,
            reconnectionDelay: 500,
            reconnectionAttempts: Infinity,
            transports: ["websocket"]
        });

        console.log("Connection is being established")

        this.socket.on('connected_success', () => {
            this.setState({ isConnected: true });
            this.socket.emit('room', this.state.room)
            console.log("connected? yes! and connecting to room")
        });

        this.socket.on('disconnection', () => {
            this.chatEnded();
            console.log("Connection is disconnected")
        });

        // recieve message
        this.socket.on('broadcast', messages => {
            this._storeMessages(messages);
            console.log('received', messages);
        });
    }

    componentWillUnmount() { }

    // message events below ========================================================

    // Event listeners

    /**
     * When a message is sent, send the message to the server
     * and store it in this component's state.
     */
    onSend = (messages = []) => {
        this.socket.emit('chat message', {
            message: messages[0],
            room: this.state.socketNum
        });
        this._storeMessages(messages);
        console.log(this.state.messages);
    }

    // Helper functions
    _storeMessages = (messages) => {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Ionicons
                        name={
                            Platform.OS === 'ios' ? 'ios-arrow-dropleft' : 'md-arrow-dropleft'
                        }
                        size={30}
                        style={style.back}
                        onPress={this.handleBackPress}
                    />
                    <Ionicons
                        name={
                            Platform.OS === 'ios' ? 'ios-exit' : 'md-exit'
                        }
                        size={40}
                        style={style.back}
                        onPress={this.handleBackPress}
                    />
                </View>
                {/* // this is the socket IO chat */}
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: this.state.userId,
                    }}
                    shouldUpdateMessage={() => true}
                />
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