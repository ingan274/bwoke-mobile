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
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { Card, ListItem, Icon, Header, } from 'react-native-elements'
import styled from "styled-components/native";

export default function eventCard(props) {
    return (
        <Card
            featuredTitle={props.title}
            imageStyle={{ flex: 1 }}
            image={require('../assets/images/fakeCardImages/event.jpg')}
        >
            <Text style={{ marginBottom: 10 }}>
            {props.name}
            </Text>
            <Text style={{ marginBottom: 10 }}>
            {props.date}
            </Text>
            <Text style={{ marginBottom: 15 }}>
            {props.description}
            </Text>
            <Button
                title='Add to Calander'
                onClick={props.onPress} />
        </Card>
    )
}

const StyledButton = styled.TouchableOpacity`
   background-color:${props => (props.transparent ? "transparent" : "#f3f8ff")};
   padding:15px;
   border:${props => (props.transparent ? "1px solid #f3f8ff " : 0)}
   justify-content:center;
   margin-bottom:20px;
   border-radius:24px
  `;

  StyledTitle = styled.Text`
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    letter-spacing: 3;
    color: ${props => (props.transparent ? "#f3f8ff " : "#666")};
  `;

export const Button = ({ ...props }) => {
    return (
        <StyledButton {...props} onPress={props.onClick} >
            <StyledTitle {...props}>{props.title}</StyledTitle>
        </StyledButton>
    );
};


