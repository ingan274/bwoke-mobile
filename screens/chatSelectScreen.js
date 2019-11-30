import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, AsyncStorage, View, Text, Navigator, PropTypes, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import formInput from '../components/formInput';
import buttonFrom from '../components/buttonForm';
window.navigator.userAgent = 'ReactNative';


class ChatRoom extends Component {
    state = {
        rooms: [],
        newRoom:''
    }

    saveRoom = async () => {
        // save room in local storage
    }

    setUpRoom = () => {
        this.rooms.map((room) => {
            return <TouchableOpacity style={styles.roomButton}>
                <Text style={styles.buttonText}>{room}</Text>
            </TouchableOpacity>
        }
    }


    render() {
        return (
            <View style={style.container}>
            {this.setUpRoom()}



            </View >
        );
    }

    handleBackPress = () => {

        const {
            navigation: { navigate },
        } = this.props;
        navigate('Rooms');

    }

}

module.exports = ChatRoom;