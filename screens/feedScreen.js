import React, { PureComponent, Component, Fragment } from 'react';
import { Platform, StyleSheet, Dimensions, ViewScroll, Text, Navigator, ScrollView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { ListItem, Icon, Header } from 'react-native-elements'
import AddEventModal from '../components/addEventModal'
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors'
window.navigator.userAgent = 'ReactNative';
import styled from "styled-components/native";
import EventCard from "../components/eventCard"

export default class EventFeed extends Component {
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
        return (

            <EventCard 
            title="title"
            name="name"
            date="date"
            description="decription"
            />
            
        )


        // fetch(`https://bwoke.herokuapp.com/events`, {
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

        // return (<View style={styles.eventscontainer}>
        //     <Text style={styles.eventTitle}>{title}</Text>
        //     <Text style={styles.eventNmae}>{name}</Text>
        //     <Text style={styles.eventDate}>{date}</Text>
        //     <Text style={styles.eventDescription}>{description}</Text>
        // </View>

        //         })
        //     })
        //     .catch(err => console.warn(err))
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={styles.container}>

                    {/* should we focus these on celebrities? */}
                    <ScrollView>
                        {this.getEvents()}
                        <AddEventModal
                            onPressOut={() => {
                                this.setModalVisible(false);
                            }}
                            visible={this.state.modalVisible}
                        />
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

EventFeed.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.black,
        // paddingVertical: 12,
        paddingTop: 32,
        // borderRadius: 4,
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