import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, ScrollView, View, Text, Navigator, PropTypes, Image, ImageBackground,
} from 'react-native';
import addEventModal from '../components/addEventModal'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors'
import Forminput from "../components/formInput";
import SearchBar from "../components/SearchBar.js";
window.navigator.userAgent = 'ReactNative';
import Background from "../assets/images/Background.gif";

export default function searchScreen() {
    return (
        <View style={styles.container}>
            <SearchBar />
            <ScrollView>
            {/* <ImageBackground source={Background} style={{ width: '100%', height: '100%' }}> */}
                <Card
                    title='HELLO WORLD'
                    image={require('../assets/images/bWokeLogoFavicon.png')}>
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='search' color='#ffffff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    image={require('../assets/images/bWokeLogoFavicon.png')}>
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    image={require('../assets/images/bWokeLogoFavicon.png')}>
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    image={require('../assets/images/bWokeLogoFavicon.png')}>
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    image={require('../assets/images/bWokeLogoFavicon.png')}>
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    image={require('../assets/images/bWokeLogoFavicon.png')}>
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    image={require('../assets/images/bWokeLogoFavicon.png')}>
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
            {/* </ImageBackground> */}
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
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
    }
});
