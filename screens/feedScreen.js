import React, { PureComponent, Component, Fragment } from 'react';
import AddEventModal from '../components/addEventModal'
import color from '../constants/Colors'
window.navigator.userAgent = 'ReactNative';
import styled from "styled-components/native";
import EventCard from "../components/eventCard"
// import EventCard from "../components/myEventCard"
import {
    Platform,
    StyleSheet,
    Dimensions,
    ScrollView,
    View,
    Text,
    Navigator,
    PropTypes,
    Image,
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import { Card, ListItem, Header, } from 'react-native-elements';
import { FAB } from 'react-native-paper';


export default class EventFeed extends Component {

    state = {
        modalVisible: false,
    };

    FloatingButtonEvent = () => {
        Alert.alert("Button Works");
    }

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
                <View>

                    {/* should we focus these on celebrities? */}
                    <ScrollView>
                        {this.getEvents()}
                        <AddEventModal
                            onPressOut={() => {
                                this.setModalVisible(false);
                            }}
                            visible={this.state.modalVisible}
                        />
                        <FAB
                            style={styles.fab}
                            small
                            icon="plus"
                            onPress={() => console.log('Pressed')}
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
    },
    TouchableOpacityStyle: {
        position: "absolute",
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        top: 30,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    }
});