import React, { PureComponent, Component, Fragment } from 'react';
import { Platform, StyleSheet, Dimensions, ViewScroll, View, Text, Navigator, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ListItem, Icon, Header } from 'react-native-elements'
import AddEventModal from '../components/addEventModal'
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors'
window.navigator.userAgent = 'ReactNative';
import styled from "styled-components/native";

import {
    Card,
    Caption,
    ImageBackground,
    Image,
    ListView,
    Columns,
    Tile,
    Title,
    Subtitle,
    Overlay,
    Screen,
    TouchableOpacity,
    GridRow
} from '@shoutem/ui';

export default class EventFeed extends Component {
    state = {
        modalVisible: false,
    };

    componentDidMount = () => {
        this.getEvents()
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    getEvents = () => {
        return (
            <Fragment>
                <View styleName="sm-gutter featured">
                    <ImageBackground
                        styleName="featured placeholder"
                        source={require('../assets/images/fakeCardImages/dunes.jpg')}                    >
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



                <GridRow columns={2}>
                    <TouchableOpacity styleName="flexible">
                        <Card styleName="flexible">
                            <Image
                                styleName="medium-wide"
                                source={require('../assets/images/fakeCardImages/snowy.jpg')}
                            />
                            <View styleName="content">
                                <Subtitle numberOfLines={3}>Some Words</Subtitle>
                                <View styleName="horizontal">
                                    <Caption styleName="collapsible" numberOfLines={2}>An Address Here</Caption>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity styleName="flexible">
                        <Card styleName="flexible">
                            <Image
                                styleName="medium-wide"
                                source={require('../assets/images/fakeCardImages/dunes.jpg')}
                            />
                            <View styleName="content">
                                <Subtitle numberOfLines={3}>Some Words</Subtitle>
                                <View styleName="horizontal">
                                    <Caption styleName="collapsible" numberOfLines={2}>An Address Here</Caption>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                </GridRow>
                <GridRow columns={2}>
                    <TouchableOpacity styleName="flexible">
                        <Card styleName="flexible">
                            <Image
                                styleName="medium-wide"
                                source={require('../assets/images/fakeCardImages/blackandwhite.jpg')}
                            />
                            <View styleName="content">
                                <Subtitle numberOfLines={3}>Some Words</Subtitle>
                                <View styleName="horizontal">
                                    <Caption styleName="collapsible" numberOfLines={2}>An Address Here</Caption>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity styleName="flexible">
                        <Card styleName="flexible">
                            <Image
                                styleName="medium-wide"
                                source={require('../assets/images/fakeCardImages/swim.jpg')}
                            />
                            <View styleName="content">
                                <Subtitle numberOfLines={3}>Some Words</Subtitle>
                                <View styleName="horizontal">
                                    <Caption styleName="collapsible" numberOfLines={2}>An Address Here</Caption>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                </GridRow>
                <GridRow columns={2}>
                    <TouchableOpacity styleName="flexible">
                        <Card styleName="flexible">
                            <Image
                                styleName="medium-wide"
                                source={require('../assets/images/fakeCardImages/station.jpg')}
                            />
                            <View styleName="content">
                                <Subtitle numberOfLines={3}>Some Words</Subtitle>
                                <View styleName="horizontal">
                                    <Caption styleName="collapsible" numberOfLines={2}>An Address Here</Caption>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity styleName="flexible">
                        <Card styleName="flexible">
                            <Image
                                styleName="medium-wide"
                                source={require('../assets/images/fakeCardImages/dunes.jpg')}
                            />
                            <View styleName="content">
                                <Subtitle numberOfLines={3}>Some Words</Subtitle>
                                <View styleName="horizontal">
                                    <Caption styleName="collapsible" numberOfLines={2}>An Address Here</Caption>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                </GridRow>
                <GridRow columns={2}>
                    <TouchableOpacity styleName="flexible">
                        <Card styleName="flexible">
                            <Image
                                styleName="medium-wide"
                                source={require('../assets/images/fakeCardImages/snowy.jpg')}
                            />
                            <View styleName="content">
                                <Subtitle numberOfLines={3}>Some Words</Subtitle>
                                <View styleName="horizontal">
                                    <Caption styleName="collapsible" numberOfLines={2}>An Address Here</Caption>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity styleName="flexible">
                        <Card styleName="flexible">
                            <Image
                                styleName="medium-wide"
                                source={require('../assets/images/fakeCardImages/station.jpg')}
                            />
                            <View styleName="content">
                                <Subtitle numberOfLines={3}>Some Words</Subtitle>
                                <View styleName="horizontal">
                                    <Caption styleName="collapsible" numberOfLines={2}>An Address Here</Caption>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                </GridRow>
            </Fragment>
        )


        // fetch(`https://bwoke.herokuapp.com/events`, {
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        // }).then(res => res.json())
        //     .then((data) => {

        //         data.map((event) => {
        //             let title = event.title;
        //             let description = event.description;
        //             let name = event.title;
        //             let date = event.date;

        // return (<View style={styles.eventscontainer}>
        //     <Text style={styles.eventTitle}>{title}</Text>
        //     <Text style={styles.eventNmae}>{name}</Text>
        //     <Text style={styles.eventDate}>{date}</Text>
        //     <Text style={styles.eventDescription}>{description}</Text>
        // </View>

        //         })
        //     })
        //     .catch(err => console.warn(err))
    }

    // </ViewScroll>
    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={styles.container}>

                    {/* should we focus these on celebrities? */}
                    <ScrollView>
                        {this.getEvents()}
                        <AddEventModal
                            onPressOut={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}
                            visible={this.state.modalVisible}
                        />
                    </ScrollView>
                </View>
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
StyledTitle = styled.Text`
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    letter-spacing: 3;
    color: ${props => (props.transparent ? "#f3f8ff " : "#666")};
  `;

StyledTitleTrend = styled.Text`
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2;
    height: 15px;
    color: ${props => (props.transparent ? "#f3f8ff " : "#666")};
  `;

export const Button = ({ ...props }) => {
    return (
        <StyledButton {...props} onPress={props.onClick} >
            <StyledTitle {...props}>{props.title}</StyledTitle>
        </StyledButton>
    );
};