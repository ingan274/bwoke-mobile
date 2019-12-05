import React, { PureComponent, Component, Fragment } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    AsyncStorage,
    View,
    Text,
    Navigator,
    PropTypes,
    TouchableOpacity,
} from 'react-native';
import color from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Forminput from '../components/formInput';
import FormButton from '../components/formButton';
import { Header, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
window.navigator.userAgent = 'ReactNative';

export default class ChatRoom extends Component {
    componentDidMount() {
        this.deleteDB()
    }

    deleteDB = async () => {
        try {
            await AsyncStorage.removeItem('username');
            await AsyncStorage.removeItem('room');
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    avatar = [
        {
            name: 'Feeding America',
            avatar_url: 'https://bit.ly/386i8AE',
            room: 'feeding-america',
        },
        {
            name: "Boys and Girl's Club",
            avatar_url: 'https://bit.ly/34M9tB7',
            room: 'boysandgirlsclub',
        },
        {
            name: 'American Red Cross',
            avatar_url: 'https://bit.ly/34O6MiE',
            room: 'americanredcross',
        },
        {
            name: 'Americares',
            avatar_url: 'https://bit.ly/2rbH9cY',
            room: 'americares',
        },
        {
            name: 'UNICEF USA',
            avatar_url: 'https://bit.ly/2Lp9X8W',
            room: 'unicef-usa',
        },
        {
            name: 'Make-A-Wish Foundation',
            avatar_url: 'https://bit.ly/2RgaXj9',
            room: 'make-a-wish-foundation'
        },
        {
            name: 'United Way Worldwide',
            avatar_url: 'https://bit.ly/2rijtUd',
            room: 'united-way-worldwide',
        },
        {
            name: 'Task Force for Global Health',
            avatar_url: 'https://bit.ly/34OigCK',
            room: 'task-force-for-global-health',
        },
        {
            name: 'The Salvation Army',
            avatar_url: 'https://bit.ly/34O9DrS',
            room: 'the-salvation-army'
        },
        {
            name: "St. Jude Children's Research Hospital",
            avatar_url: 'https://bit.ly/2YdoM3i',
            room: "st-jude-childrens-research-hospital"
        },
        {
            name: 'Direct Relief',
            avatar_url: 'https://bit.ly/2OTiCma',
            room: 'directrelief'
        },
        {
            name: 'Habitat for Humanity',
            avatar_url: 'https://bit.ly/2OKc3SC',
             room: 'habitat-for-humanity',
        },
        {
            name: 'YMCA',
            avatar_url: 'https://bit.ly/33PtQMK',
            room: 'ymca',
        },
        {
            name: 'Goodwill',
            avatar_url: 'https://bit.ly/34RCXgV',
            room: 'goodwill'
        },
        {
            name: 'American Cancer Society',
            avatar_url: 'https://bit.ly/2DLncfP',
            room: 'american-cancer-society'
        },
        {
            name: 'Food for the Poor',
            avatar_url: 'https://bit.ly/2LjIGVl',
            room: 'food-for-the-poor'
        },
    ];

    goToRoom = async room => {
        // save room in local storage
        try {
            await AsyncStorage.setItem('room', `${room}`);
            console.log('room entering now: ', room);
            const {
                navigation: { navigate },
            } = this.props;
            navigate('Chat');
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    };

    setUpRoom = () => {
        let roomArray = this.state.rooms;
        return roomArray.map((room, i) => {
            <TouchableOpacity
                // style={styles.roomButton}
                key={i}
                onClick={this.goToRoom(room)}>
                <Text style={styles.buttonText}>{room}</Text>
            </TouchableOpacity>;
        });
    };

    handleSubmit = () => {
        this.state.rooms.push(this.state.newRoom);
        this.setUpRoom();
    };

    render = () => {
        return (
            <Fragment>
                <ScrollView>
                    <View style={styles.container}>
                        {this.avatar.map((l, i) => (
                            <TouchableOpacity onPress={() => this.goToRoom(l.room)} key={i} style = {styles.list}>
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.avatar_url } }}
                                    title={l.name}
                                    titleStyle={[
                                        styles.title
                                    ]}
                                    subtitle={l.subtitle}
                                    bottomDivider
                                    chevron
                                    width={'100%'}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </Fragment>
        );
    };
}

ChatRoom.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: color.black,
        // paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: color.green,
        // marginBottom: 250,
        marginTop: 30,
    },
    title: {
        fontSize: 18,
        width: '100%'
    },
    list: {
        width: '100%'
    }
});
