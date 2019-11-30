import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, ViewScroll, View, Text, Navigator, PropTypes, StyleSheet } from 'react-native';
import addEventModal from '../components/addEventModal'
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors'
window.navigator.userAgent = 'ReactNative';


class EventFeed extends Component {
    state = {
        modalVisible: false,
    };

    componentDidMount = () => {
        this.getEvents()
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    getEvents = () => {
        return  <View style={styles.eventscontainer}>
                            <Text style={styles.eventTitle}>Title</Text>
                            <Text style={styles.eventNmae}>Charity Name</Text>
                            <Text style={styles.eventDate}>Date</Text>
                            <Text style={styles.eventDescription}>description</Text>
                        </View>

        // fetch(`URLHERE`, {
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        // }).then(res => res.json())
        //     .then((data) => {

        //         data.map((event) => {
        //             let title = event.title;
        //             let description = event.description;
        //             let name = event.title;
        //             let date = event.date;

        //             return <View style={styles.eventscontainer}>
        //                 <Text style={styles.eventTitle}>{title}</Text>
        //                 <Text style={styles.eventNmae}>{name}</Text>
        //                 <Text style={styles.eventDate}>{date}</Text>
        //                 <Text style={styles.eventDescription}>{description}</Text>
        //             </View>

        //         })
        //     })
        //     .catch(err => console.warn(err))
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.addEvent}>
                    <Ionicons
                        name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'}
                        size={30}
                        color={color.green}
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                    />
                    <Text style={styles.addEventText}>Add Event</Text>
                </View >
                <ViewScroll>
                    <addEventModal
                        onPressOut={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}
                        visible={this.state.modalVisible}
                    />
                    {this.getEvents()}
                </ViewScroll>
            </View >
        );
    }

}

module.exports = EventFeed;