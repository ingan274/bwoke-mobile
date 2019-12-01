import React, { PureComponent, Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    ScrollView,
    View,
    Text,
    Navigator,
    PropTypes,
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator,

} from 'react-native';
import addEventModal from '../components/addEventModal'
import { Card, ListItem, Icon, Header, Image } from 'react-native-elements'
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors'
import Forminput from "../components/formInput";
// import SearchBar from "../components/SearchBar.js";
window.navigator.userAgent = 'ReactNative';
import Background from "../assets/images/bWokeLogoFavicon.png";
import SearchBar from 'react-native-dynamic-search-bar';


export default function searchScreen() {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'bWoke', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <SearchBar
                fontColor="#c6c6c6"
                iconColor="#c6c6c6"
                shadowColor="#282828"
                cancelIconColor="#c6c6c6"
                backgroundColor="#353d5e"
                placeholder="Search here"
            />
            <ScrollView
                horizontal={true}
                snapToInterval={200} //your element width
                decelerationRate={0.9}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 10, marginBottom: 10, }}
            // snapToAlignment={"center"}
            >
                <Trending
                    // transparent
                    title="Beyonce"
                // onPress={this.onPress}
                />
                <Trending
                    // transparent
                    title="Michael B. Jordan"
                // onPress={this.onPress}
                />
                <Trending
                    // transparent
                    title="Boys and Girl's Club"
                // onPress={this.onPress}
                />
                <Trending
                    // transparent
                    title="American Red Cross"
                // onPress={this.onPress}
                />
                <Trending
                    // transparent
                    title="Drake"
                // onPress={this.onPress}
                />
                <Trending
                    // transparent
                    title="UNICEF USA"
                // onPress={this.onPress}
                />
                <Trending
                    // transparent
                    title="Make-A-Wish Foundation"
                // onPress={this.onPress}
                />
            </ScrollView>

            <ScrollView>
                {/* <ImageBackground source={Background} style={{ width: '100%', height: '100%' }}> */}
                <Card
                    image={require('../assets/images/fakeCardImages/rihanna.jpg')}
                    // title='HELLO WORLD'
                    // imageStyle={{ flex: 1, resizeMode: 'cover' }}
                >
                    {/* <Image
                        // style={styles.image}
                        resizeMode="cover"
                        source={require('../assets/images/bWokeLogoFavicon.png')}
                        PlaceholderContent={<ActivityIndicator />}
                    /> */}
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    image={require('../assets/images/fakeCardImages/dunes.jpg')}
                    // title='HELLO WORLD'
                    // imageStyle={{ flex: 1, resizeMode: 'cover' }}
                >
                    {/* <Image
                        // style={styles.image}
                        resizeMode="cover"
                        source={require('../assets/images/bWokeLogoFavicon.png')}
                        PlaceholderContent={<ActivityIndicator />}
                    /> */}
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    image={require('../assets/images/fakeCardImages/station.jpg')}
                    // title='HELLO WORLD'
                    // imageStyle={{ flex: 1, resizeMode: 'cover' }}
                >
                    {/* <Image
                        // style={styles.image}
                        resizeMode="cover"
                        source={require('../assets/images/bWokeLogoFavicon.png')}
                        PlaceholderContent={<ActivityIndicator />}
                    /> */}
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    image={require('../assets/images/fakeCardImages/snowy.jpg')}
                    // title='HELLO WORLD'
                    // imageStyle={{ flex: 1, resizeMode: 'cover' }}
                >
                    {/* <Image
                        // style={styles.image}
                        resizeMode="cover"
                        source={require('../assets/images/bWokeLogoFavicon.png')}
                        PlaceholderContent={<ActivityIndicator />}
                    /> */}
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    image={require('../assets/images/fakeCardImages/map.jpg')}
                    // title='HELLO WORLD'
                    // imageStyle={{ flex: 1, resizeMode: 'cover' }}
                >
                    {/* <Image
                        // style={styles.image}
                        resizeMode="cover"
                        source={require('../assets/images/bWokeLogoFavicon.png')}
                        PlaceholderContent={<ActivityIndicator />}
                    /> */}
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    image={require('../assets/images/fakeCardImages/swim.jpg')}
                    // title='HELLO WORLD'
                    // imageStyle={{ flex: 1, resizeMode: 'cover' }}
                >
                    {/* <Image
                        // style={styles.image}
                        resizeMode="cover"
                        source={require('../assets/images/bWokeLogoFavicon.png')}
                        PlaceholderContent={<ActivityIndicator />}
                    /> */}
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    image={require('../assets/images/fakeCardImages/blackandwhite.jpg')}
                    // title='HELLO WORLD'
                    // imageStyle={{ flex: 1, resizeMode: 'cover' }}
                >
                    {/* <Image
                        // style={styles.image}
                        resizeMode="cover"
                        source={require('../assets/images/bWokeLogoFavicon.png')}
                        PlaceholderContent={<ActivityIndicator />}
                    /> */}
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    image={require('../assets/images/fakeCardImages/forest.jpg')}
                    // title='HELLO WORLD'
                    // imageStyle={{ flex: 1, resizeMode: 'cover' }}
                >
                    {/* <Image
                        // style={styles.image}
                        resizeMode="cover"
                        source={require('../assets/images/bWokeLogoFavicon.png')}
                        PlaceholderContent={<ActivityIndicator />}
                    /> */}
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
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
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: color.black,
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
    },
    trendingButton: {
        borderRadius: 24,
        marginLeft: 5,
    }
});

const StyledButton = styled.TouchableOpacity`
   background-color:${props => (props.transparent ? "transparent" : "#f3f8ff")};
   padding:15px;
   border:${props => (props.transparent ? "1px solid #f3f8ff " : 0)}
   justify-content:center;
   margin-bottom:20px;
   border-radius:24px
  `;
const TrendingButton = styled.TouchableOpacity`
   background-color:${props => (props.transparent ? "transparent" : "#f3f8ff")};
   padding:15px;
   border:${props => (props.transparent ? "1px solid #f3f8ff " : 0)}
   justify-content:center;
   margin-bottom:0px;
   margin-top:10px;
   margin-left:10px;
   border-radius:24px
  `;
StyledTitle = styled.Text`
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    letter-spacing: 3;
    color: ${props => (props.transparent ? "#f3f8ff " : "#666")};
  `;

export const Trending = ({ onPress, color, ...props }) => {
    return (
        <TrendingButton {...props}>
            <StyledTitle {...props}>{props.title}</StyledTitle>
        </TrendingButton>
    );
};
export const Button = ({ onPress, color, ...props }) => {
    return (
        <StyledButton {...props}>
            <StyledTitle {...props}>{props.title}</StyledTitle>
        </StyledButton>
    );
};
