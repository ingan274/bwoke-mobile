import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, ViewScroll, View, Text, Navigator, PropTypes, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors'
window.navigator.userAgent = 'ReactNative';

const SOCKET_URL = "http://localhost:8000/talk"

class ChatRoom extends Component {
    state = {
        modalVisible: false,
      };

    componentDidMount = () => {
        this.getEvents()
    }

    postEvent = () => {
        fetch(`URLHERE`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event)
        }).then(res => res.json())
            .then(async (data) => {
                const response = data[0]
                // SAVE RESPONSE IN LOCAL STORAGE
                const language1 = response.language1;
                const language2 = response.language2;
                const language3 = response.language3;
                const socket = response.socket;

                this.handleLocalStorageLanguage(language1, language2, language3, socket)

                //NAVIGATE
                const {
                    navigation: { navigate },
                } = this.props;
                navigate('Account');
            })
            .catch(err => console.warn(err))
    }

    getEvents = () => {
        fetch(`URLHERE`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then((data) => {

                data.map((event) => {
                    let title = event.title;
                    let description = event.description;
                    let name = event.title;
                    let date = event.date;

                    return <View style={styles.eventscontainer}>
                        <Text style={styles.eventTitle}>{title}</Text>
                        <Text style={styles.eventNmae}>{name}</Text>
                        <Text style={styles.eventDate}>{date}</Text>
                        <Text style={styles.eventDescription}>{description}</Text>
                    </View>
                })
            })
            .catch(err => console.warn(err))
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.addEvent}>
                    <Ionicons
                        name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
                        size={30}
                        color={color.green}
                    />
                    <Text style={styles.addEventText}>Add Event</Text>
                </View >
                <ViewScroll>
                    {this.getEvents()}
                </ViewScroll>
            </View >
        );
    }

}

module.exports = ChatRoom;