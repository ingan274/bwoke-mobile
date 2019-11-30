import * as WebBrowser from 'expo-web-browser';
import React, { Fragment } from 'react';
import {
    Image,
    ImageBackground,
    Platform,
    StyleSheet,
    View,
} from 'react-native';

import styled from "styled-components/native";
import Background from "../assets/images/Background.gif";
import LoginText from '../components/LoginText'

export default function LoginScreen() {    
    return (
        <View style={styles.container}>
            <ImageBackground source={Background} style={{ width: '100%', height: '100%' }}>
                <View style={styles.welcomeContainer}>
                    <Image
                        source={
                            __DEV__
                                ? require('../assets/images/bWokeLogoFavicon.png')
                                : require('../assets/images/robot-prod.png')
                        }
                        style={styles.welcomeImage}
                    />
                </View>
                <Title>Login</Title>
                <LoginText />
                <ButtonWrapper>
                    <Fragment>
                        {/* <Button title="Create Account" /> */}
                        <Button transparent title="Login" />
                    </Fragment>
                </ButtonWrapper>
            </ImageBackground>
        </View>
    );
}

LoginScreen.navigationOptions = {
    header: null,
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 120,
        height: 100,
        resizeMode: 'contain',
        marginTop: 50,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    WelcomeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});

// export const Wrapper = styled.View`
//   justify-content: space-between;
//   padding: 20px;
//   align-items: center;
//   flex-direction: column;
// `;
export const Logo = styled.Image`
    max-width: 100px;
    width: 100px;
    height: 100px;
  `;
export const TextDescription = styled.Text`
    letter-spacing: 3;
    color: #f4f4f4;
    text-align: center;
    text-transform: uppercase;
  `;
export const ButtonWrapper = styled.View`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  `;
export const Title = styled.Text`
    color: #f4f4f4;
    margin: 30% 0px 20px;
    font-size: 30;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3;
  `;
const StyledButton = styled.TouchableOpacity`
   width:250px;
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

export const Button = ({ onPress, color, ...props }) => {
    return (
        <StyledButton {...props}>
            <StyledTitle {...props}>{props.title}</StyledTitle>
        </StyledButton>
    );
};