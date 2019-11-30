import React, { Component } from 'react';
import Colors from '../constants/Colors';
import Forminput from "../components/formInput";
import FormButton from "../components/formButton";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
    TouchableHighlight,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class eventAddModal extends Component {
    state = {
        title: '',
        date: '',
        name: '',
        description: '',
        error: false,
    }

    showError = () => {
        if (this.state.error) {
            return <Text style={style.error}>Looks like your missing something. Please make sure you have a title, your charity/non-profit name, date, and description.</Text>
        }
    };

    render = () => {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.visible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={{ marginTop: 30, backgroundColor: Colors.blue4, flex: 1 }}>
                        <View style={styles.modal}>
                            <TouchableHighlight onPress={this.props.onPressOut}>
                                <Ionicons
                                    name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
                                    size={40}
                                    color={Colors.white}
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

                            <Forminput
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
            </View >
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        paddingHorizontal: 30,
    },
    exit: {
        marginTop: 10
    },
    textCont: {
        alignItems: 'center',
        marginTop: 100,
    },
    text: {
        fontSize: 20,
        paddingHorizontal: 50,
        color: Colors.white
    },
    textLine: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.white
    },
    plane: {
        color: Colors.blue2
    }
});

export default eventAddModal;