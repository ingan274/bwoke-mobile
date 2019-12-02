import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, AsyncStorage, View, Text, Navigator, PropTypes, TouchableOpacity } from 'react-native';
import color from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Forminput from '../components/formInput';
import FormButton from '../components/formButton';
window.navigator.userAgent = 'ReactNative';


export default class ChatRoom extends Component {
    state = {
        rooms: ["Immigration", "Women's Rights", "Foster Families", "LGBTQIA", "Civil Rights", "Animals", "Environment", "International", "Community Developement", "Public Policy", "Gun Safety"],
        newRoom: ''
    }

    goToRoom = async (room) => {
        // save room in local storage
        try {
            await AsyncStorage.setItem('room', `${room}`);
            console.loe("room entering now: ", room)
            const {
                navigation: { navigate },
            } = this.props;
            navigate('Chat');
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    setUpRoom = () => {
        let roomArray = this.state.rooms
        return roomArray.map((room, i) => {
                <TouchableOpacity
                    // style={styles.roomButton}
                    key={i}
                    onClick={this.goToRoom(room)}>
                    <Text style={styles.buttonText}>{room}</Text>
                </TouchableOpacity>
        })
    }

    handleSubmit = () => {
        rooms.push(this.state.newRoom)
        this.setUpRoom()
    }


    render = () => {
        return (
            <View style={styles.container}>


                <Forminput
                    value={this.state.newRoom}
                    onChangeText={(event) => this.setState({ newRoom: event })}
                    placeholder="New Chat Room"
                    name="newChatroom"
                    autoCorrect={true}
                    returnKeyType="done"
                />

                <FormButton label="Create Chatroom" onPress={this.handleSubmit} />

                {this.setUpRoom()}

            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.black,
        // paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: color.green,
        // marginBottom: 250,
        // marginTop: 30,
    },
    text: {
        color: 'white',
        textAlign: "center",
        height: 20
    },
    trendingButton: {
        borderRadius: 24,
        marginLeft: 5,
    }
});
