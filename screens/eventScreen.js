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
    Image,
    // ImageBackground,
    TouchableOpacity,
    ActivityIndicator,

} from 'react-native';
import addEventModal from '../components/addEventModal'
import { Card, ListItem, Icon, Header, } from 'react-native-elements'
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors'
import Forminput from "../components/formInput";
// import SearchBar from "../components/SearchBar.js";
window.navigator.userAgent = 'ReactNative';
import Background from "../assets/images/bWokeLogoFavicon.png";
import SearchBar from 'react-native-dynamic-search-bar';

import {
    Caption,
    ImageBackground,
    ListView,
    Tile,
    Title,
    Subtitle,
    Overlay,
    Screen
  } from '@shoutem/ui';


export default function searchScreen() {
    return (
        <View styleName="sm-gutter featured">
            <ImageBackground
                styleName="featured placeholder"
            // source={{ uri: restaurant.image.url }}
            >
                <Tile>
                    <Title>Sample</Title>
                    <View styleName="horizontal md-gutter-top" virtual>
                        <Caption
                            styleName="collapsible"
                            numberOfLines={1}>
                            Simple address
            </Caption>
                    </View>
                </Tile>
            </ImageBackground>
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
