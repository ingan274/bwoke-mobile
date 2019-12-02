import React, { PureComponent, Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    ScrollView,
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,

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


export default class searchScreen extends Component {

    state = {
        results: false,
        search: '',
    }

    handleSearch = (text) => {
        this.setState({ search: text })
    }

    SearchBar = () => {
        let search = this.state.search
        let results = []

        if (this.state.results) {

            // search charities
            fetch(`URLLINKHEREFROM-CHARITIES/${search}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(res => res.json())
                .then((response) => {
                    results.push(response)
                })
                .catch(err => console.warn(err))

            // search Celebrities
            fetch(`URLLINKHEREFROM-OUR-DATABASE/${search}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(res => res.json())
                .then((response) => {
                    results.push(response)
                })
                .catch(err => console.warn(err))

                results.map((result) => {
                    return (
                        // THIS DESIGN SHOULD CHANGE
                        <Card
                            image={result.imageURL} // check response
                        >
                            <Text style={{ marginBottom: 10 }}>
                                {/* this is where the response text goes */}
                                {result.text}
                            </Text>
                        </Card>
                    )

                })
        }
    }

    SearchTrendingCharities = (charity) => {

        if (this.state.results) {

            fetch(`URLLINKHEREFROM-CHARITIES/${charity}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(res => res.json())
                .then((response) => {


                    response.map((result) => {
                        return (
                            // THIS DESIGN SHOULD CHANGE
                            <Card
                                image={result.imageURL} // check response
                            >
                                <Text style={{ marginBottom: 10 }}>
                                    {/* this is where the response text goes */}
                                    {result.text}
                                </Text>
                            </Card>
                        )

                    })
                })
                .catch(err => console.warn(err))
        }
    }

    SearchListCelebs = (celebrities) => {
        if (this.state.results) {

            fetch(`URLLINKHEREFROM-OUR-DATABASE/${celebrities}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(res => res.json())
                .then((response) => {


                    response.map((result) => {
                        return (
                            // THIS DESIGN SHOULD CHANGE
                            <Card
                                image={result.imageURL} // check response
                            >
                                <Text style={{ marginBottom: 10 }}>
                                    {/* this is where the response text goes */}
                                    {result.text}
                                </Text>
                            </Card>
                        )

                    })
                })
                .catch(err => console.warn(err))
        }
    }

    topCelebsList = () => {
        if (!this.state.results) {
            return (
                <View>
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
                            title='VIEW NOW'
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchListCelebs('CELEBRITY')
                            }} />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/dunes.jpg')}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW'
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchListCelebs('CELEBRITY')
                            }} />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/station.jpg')}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW'
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchListCelebs('CELEBRITY')
                            }} />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/snowy.jpg')}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW'
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchListCelebs('CELEBRITY')
                            }} />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/map.jpg')}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW'
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchListCelebs('CELEBRITY')
                            }} />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/swim.jpg')}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW'
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchListCelebs('CELEBRITY')
                            }} />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/blackandwhite.jpg')}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW'
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchListCelebs('CELEBRITY')
                            }} />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/forest.jpg')}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW'
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchListCelebs('CELEBRITY')
                            }} />
                    </Card>
                </View>

            )
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={styles.container}>
                    {/* <Header
                // leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'bWoke', style: { color: '#fff' } }}
                // rightComponent={{ icon: 'home', color: '#fff' }}
            /> */}
                    <SearchBar
                        fontColor="#c6c6c6"
                        iconColor="#c6c6c6"
                        shadowColor="#282828"
                        cancelIconColor="#c6c6c6"
                        backgroundColor="#353d5e"
                        placeholder="Search here"
                        onChangeText={text => {
                            this.handleSearch(text);
                        }}
                        onPressCancel={() => {
                            this.handleSearch("");
                        }}
                        onPress={() => {
                            this.setState({ results: true })
                            this.SearchBar()
                        }}
                    />
                    <ScrollView
                        horizontal={true}
                        snapToInterval={200} //your element width
                        decelerationRate={0.9}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, marginBottom: 10, }}
                    // snapToAlignment={"center"}
                    >
                        {/* should we focus these on charities? */}

                        <Trending
                            // transparent
                            title="Feeding America"
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchTrendingCharities('Feeding America')
                            }}
                        />
                        <Trending
                            // transparent
                            title="Boys and Girl's Club"
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchTrendingCharities("Boys and Girl's Club")
                            }}
                        />
                        <Trending
                            // transparent
                            title="American Red Cross"
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchTrendingCharities("American Red Cross")
                            }}
                        />
                        <Trending
                            // transparent
                            title="Americares"
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchTrendingCharities("Americares")
                            }}
                        />
                        <Trending
                            // transparent
                            title="UNICEF USA"
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchTrendingCharities("UNICEF USA")
                            }}
                        />
                        <Trending
                            // transparent
                            title="Make-A-Wish Foundation"
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchTrendingCharities("Make-A-Wish Foundation")
                            }}
                        />
                        <Trending
                            // transparent
                            title="United Way Worldwide"
                            onClick={() => {
                                this.setState({ results: true })
                                this.SearchTrendingCharities("United Way Worldwide")
                            }}
                        />
                    </ScrollView>

                    {/* should we focus these on celebrities? */}
                    <ScrollView>
                        {this.topCelebsList()}
                        {this.SearchTrendingCharities()}
                        {this.SearchListCelebs()}
                        {this.SearchBar()}
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

searchScreen.navigationOptions = {
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
const TrendingButton = styled.TouchableOpacity`
   background-color:${props => (props.transparent ? "transparent" : "#f3f8ff")};
   padding: 12px;
   border:${props => (props.transparent ? "1px solid #f3f8ff " : 0)}
   justify-content:center;
   margin-bottom:0px;
   margin-top:10px;
   margin-left:10px;
   border-radius:24px;
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

export const Trending = ({ onPress, color, ...props }) => {
    return (
        <TrendingButton {...props} onPress={props.onClick}>
            <StyledTitleTrend {...props}>{props.title}</StyledTitleTrend>
        </TrendingButton>
    );
};
export const Button = ({ ...props }) => {
    return (
        <StyledButton {...props} onPress={props.onClick} >
            <StyledTitle {...props}>{props.title}</StyledTitle>
        </StyledButton>
    );
};
