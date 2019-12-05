import React, { PureComponent, Component, Fragment } from 'react';
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors'
window.navigator.userAgent = 'ReactNative';
import styled from "styled-components/native";
import EventCard from "../components/eventCard"
import FormButton from "../components/formButton"
import Forminput from "../components/formInput"
import ForminputLong from "../components/formLongInput"
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
    Modal,
    TouchableHighlight,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { FAB } from 'react-native-paper';
export default class EventFeed extends Component {
    state = {
        modalVisible: false,
        nametitle: '',
        date: '',
        name: '',
        description: '',
        error: false,
        events: []
    };
    componentDidMount = () => {
        this.getEvents()
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    handleSubmit = () => {
        let title = this.state.title;
        let date = this.state.date;
        let name = this.state.name;
        let description = this.state.description;
        let event = {
            title: title,
            date: date,
            name: name,
            description: description
        }
        if (title && date && name && description) {
            fetch(`https://bwoke.herokuapp.com/events`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event)
            }).then((data) => {
                console.log("Posted")
            })
                .catch(err => console.warn(err))
        } else {
            this.setState({ error: true })
        }
    }
    showError = () => {
        if (this.state.error) {
            return <Text style={styles.error}>Looks like your missing something. Please make sure you have a title, your charity/non-profit name, date, and description.</Text>
        }
    };
    getEvents = () => {
        fetch(`https://bwoke.herokuapp.com/events`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then((data) => {
                this.setState({ events: data })
            })
            .catch(err => console.warn(err))
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                {/* <View style={styles.container}> */}
                {/* should we focus these on celebrities? */}
                <Fragment>
                    <FAB
                        // label='modalButton'
                        style={styles.fab}
                        // small
                        icon="plus"
                        color="#fff"
                        onPress={() => console.log('Button Press')}
                    />
                    <ScrollView style={styles.container}>
                        {this.state.events.map((event, i) => {
                            let title = event.title;
                            let description = event.description;
                            let name = event.name;
                            let date = event.date;
                            // console.log(description)
                            return (
                                <EventCard
                                    key={i}
                                    title={title}
                                    name={name}
                                    date={date}
                                    description={description}
                                />
                            )
                        })}
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}
                        >
                            <View>

                            </View>
                            <View style={{ marginTop: 30, backgroundColor: color.black, flex: 1 }}>
                                <View style={styles.modal}>
                                    <TouchableHighlight onPress={this.props.onPressOut}>
                                        <Ionicons
                                            name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
                                            size={40}
                                            color='white'
                                            style={styles.exit}
                                        />
                                    </TouchableHighlight>
                                    {this.showError()}
                                    <Forminput
                                        value={this.state.title}
                                        onChangeText={(event) => this.setState({ title: event })}
                                        placeholder="Event Title"
                                        name="eventTitle"
                                        autoCorrect={true}
                                        returnKeyType="next"
                                    />
                                    <Forminput
                                        value={this.state.name}
                                        onChangeText={(event) => this.setState({ name: event })}
                                        placeholder="Name of Non-profit/Charity"
                                        name="charityname"
                                        autoCorrect={true}
                                        returnKeyType="next"
                                    />
                                    <Forminput
                                        value={this.state.date}
                                        onChangeText={(event) => this.setState({ date: event })}
                                        placeholder="Date of Event"
                                        name="eventDate"
                                        autoCorrect={true}
                                        returnKeyType="next"
                                    />
                                    <ForminputLong
                                        value={this.state.title}
                                        onChangeText={(event) => this.setState({ description: event })}
                                        placeholder="Event Description"
                                        name="eventDescription"
                                        autoCorrect={true}
                                        returnKeyType="done"
                                    />
                                    <FormButton label="Post Event" onPress={this.handleSubmit} />
                                </View>
                            </View>
                        </Modal>
                    </ScrollView>
                </Fragment>
                {/* </View> */}
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
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: color.black,
        // paddingVertical: 12,
        paddingTop: 32,
        // borderRadius: 4,
        // marginBottom: 250,
        // marginTop: 30,
    },
    error: {
        color: color.red
    },
    modal: {
        paddingHorizontal: 30,
        backgroundColor: 'black'
    },
    exit: {
        marginTop: 10,
        color: 'white'
    },
    fab: {
        backgroundColor: '#000',
        position: 'absolute',
        // margin: 30,
        right: 30,
        bottom: 50,
    },
});