import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, AsyncStorage, View, Text, Navigator, PropTypes, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Forminput from '../components/formInput';
import FormButton from '../components/formButton';
window.navigator.userAgent = 'ReactNative';


class ChatRoom extends Component {
    state = {
        rooms: ["Immigration", "Women's Rights", "Foster Families", "LGBTQIA", "Civil Rights", "Animals", "Environment", "International", "Community Developement", "Public Policy", "Gun Safety"],
        newRoom: ''
    }

    goToRoom = async (room) => {
        // save room in local storage
        try {
            await AsyncStorage.setItem('room', room);
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
        this.rooms.map((room) => {
            return <TouchableOpacity
                style={styles.roomButton}
                onClick={
                    this.goToRoom({ room })
                }>
                <Text style={styles.buttonText}>{room}</Text>
            </TouchableOpacity>
        })
    }

    handleSubmit = () => {
        rooms.push(this.state.newRoom)
    }


    render = () => {
        return (
            <View style={style.container}>
                {this.setUpRoom()}

                <Forminput
                    value={this.state.newRoom}
                    onChangeText={(event) => this.setState({ newRoom: event })}
                    placeholder="New Chat Room"
                    name="newChatroom"
                    autoCorrect={true}
                    returnKeyType="done"
                />

                <FormButton label="Create Chatroom" onPress={this.handleSubmit} />

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.blue,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.blue4,
        marginBottom: 250,
        marginTop: 30,
    },
    text: {
        color: 'white',
        textAlign: "center",
        height: 20
    }
});

module.exports = ChatRoom;