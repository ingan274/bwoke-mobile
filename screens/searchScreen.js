import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, ViewScroll, View, Text, Navigator, PropTypes } from 'react-native';
import addEventModal from '../components/addEventModal'

import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors'
import Forminput from "../components/formInput";
window.navigator.userAgent = 'ReactNative';


class EventFeed extends Component {
    state = {
        modalVisible: false,
        search: ''
    };

    componentDidMount = () => {

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchbar}>
                    <Ionicons
                        name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
                        size={40}
                        color='white'
                        style={styles.exit}
                    />
                    <Forminput
                        value={this.state.title}
                        onChangeText={(event) => this.setState({ search: event })}
                        placeholder="Search"
                        name="search"
                        autoCorrect={true}
                        returnKeyType="done"
                    />
                </View>

            </View >
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.blue,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: color.green,
        marginBottom: 250,
        marginTop: 30,
    },
    text: {
        color: 'white',
        textAlign: "center",
        height: 20
    }
});

module.exports = EventFeed;