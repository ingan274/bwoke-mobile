import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, ViewScroll, View, Text, Navigator, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Card, ListItem, Icon, Header, Image } from 'react-native-elements'
import AddEventModal from '../components/addEventModal'
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors'
window.navigator.userAgent = 'ReactNative';
import styled from "styled-components/native";


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
            <Card>
                <Text style={{ marginBottom: 10 }}>
                    Title
                        </Text>
                <Text style={{ marginBottom: 10 }}>
                    Non-profit Charity Name
                        </Text>
                <Text style={{ marginBottom: 10 }}>
                    Date
                        </Text>
                <Text style={{ marginBottom: 10 }}>
                    description
                        </Text>
                <Button
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Add to Calander' />
            </Card>
        )


        // fetch(`URLHERE`, {
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