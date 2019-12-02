import * as WebBrowser from 'expo-web-browser';
import React, { Fragment, Component } from 'react';
import {
    Image,
    ImageBackground,
    Platform,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import styled from "styled-components/native";
import Background from "../assets/images/Background.gif";
import LoginText from '../components/LoginSignUpText'

export default class LoginScreen extends Component {

    state = {
        username: '',
        password: '',
        error: false,
    }

    handleUsername = (text) => {
        this.setState({ username: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }

    enterApp = () => {
        const login = {
            username: this.state.username,
            password: this.state.password,
        }

        fetch('URLLINKHERE', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login)
        }).then(res => res.json())
            .then((response) => {
                if (response.mysqlID === "none") {
                    this.setState({ error: true });
                } else {
                    let username = this.state.username
                    this.handleLocalStorageUsername(username)

                    //NAVIGATE
                    const {
                        navigation: { navigate },
                    } = this.props;
                    navigate('Tabs');
                }
            })
            .catch(err => console.warn(err))

    }

    handleLocalStorageUsername = async (username) => {
        try {
          await AsyncStorage.setItem('username', `${username}`);
          console.log('username', username);
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
      }

    showError = () => {
        if (this.state.error) {
            return <Text style={style.error}>The username and password you entered do not match.</Text>
        }
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
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
                        {this.showError()}
                        <LoginText placeholder="Username" secureTextEntry={false} handle={this.handleUsername}/>
                        <LoginText placeholder="Password" secureTextEntry={true} handle={this.handlePassword}/>
                        <ButtonWrapper>
                            <Fragment>
                                {/* <Button title="Create Account" /> */}
                                <Button transparent title="Login" />
                            </Fragment>
                        </ButtonWrapper>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        );
    }
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
        marginTop: 30,
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
        <StyledButton {...props} onPress={props.onClick}>
            <StyledTitle {...props}>{props.title}</StyledTitle>
        </StyledButton>
    );
};