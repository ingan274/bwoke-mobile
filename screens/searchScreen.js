<<<<<<< HEAD
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon, StyleSheet } from 'react-native-elements'

export default function SearchScreen() {
    return (
        <View>

            <Card
                title='HELLO WORLD'
                image={require('../assets/images/city.gif')}>
                <Text style={{ marginBottom: 10 }}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='VIEW NOW' />
            </Card>

        </View>
    )
}
=======
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
>>>>>>> d22c989e85ea6e0f5edd8b98bd1eb10a95b3c758
