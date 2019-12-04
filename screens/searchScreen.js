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
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';

// ISABEL'S CODE
export default class searchScreen extends Component {

    state = {
        results: false,
        resultsSearch: false,
        resultsCeleb: false,
        resultsCharity: false,

        search: '',
    }

    handleSearch = (text) => {
        this.setState({ search: text })
    }

    SearchBar = () => {
        let search = this.state.search

        if (this.state.resultsSearch) {

            // search charities
            fetch(`https://bwoke.herokuapp.com/search/${search}`, {
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
                            <Card>
                                <Text style={{ marginBottom: 10 }}>
                                    {result.organization.charityName}
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    {result.cause.causeName}
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    {result.mission}
                                </Text>
                            </Card>
                        )

                    })

                })
        }
    }

    SearchTrendingCharities = (charity) => {

        if (this.state.resultsCharity) {

            fetch(`https://bwoke.herokuapp.com/search/charity/${charity}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(res => res.json())
                .then((response) => {
                    if (response.data === "none") {
                        return (
                            // THIS DESIGN SHOULD CHANGE FOR NO RESULTS
                            <Card>
                                <Text style={{ marginBottom: 10 }}>
                                    Sorry There are No Results. Please try another search.
                                </Text>
                            </Card>
                        )
                    } else {
                        let orgName = response.name
                        let tagline = responsetagLine
                        let cause = response.cause
                        let mission = responsemission
                        let url = response.url

                        return (
                            // THIS DESIGN SHOULD CHANGE
                            <Card>
                                <Text style={{ marginBottom: 10 }}>
                                    {orgName}
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    {tagline}
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    {cause}
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    {mission}
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    {url}
                                </Text>
                            </Card>
                        )
                    }
                })
                .catch(err => console.warn(err))
        }
    }

    SearchListCelebs = (celebrities) => {
        if (this.state.resultsCeleb) {

            fetch(`https://bwoke.herokuapp.com/search/celeb/${celebrities}`, {
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
                <ScrollView>

                    <View>
                        <Card
                            image={require('../assets/images/fakeCardImages/rihanna.jpg')}
                            featuredTitle='Rihanna'
                            imageStyle={{ flex: 1 }}
                        >
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
        </Text>
                            <Button
                                title='VIEW NOW'
                                onClick={() => {
                                    this.setState({ results: true, resultsCeleb: true })
                                    this.SearchListCelebs('CELEBRITY')
                                }} />
                        </Card>
                        <Card
                            image={require('../assets/images/fakeCardImages/justin.jpg')}
                            featuredTitle='Justin Beiber'
                            imageStyle={{ flex: 1 }}
                        >
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
        </Text>
                            <Button
                                title='VIEW NOW'
                                onClick={() => {
                                    this.setState({ results: true, resultsCeleb: true })
                                    this.SearchListCelebs('CELEBRITY')
                                }} />
                        </Card>
                        <Card
                            image={require('../assets/images/fakeCardImages/lebron.jpg')}
                            featuredTitle='Lebron James'
                            imageStyle={{ flex: 1 }}
                        >
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
        </Text>
                            <Button
                                title='VIEW NOW'
                                onClick={() => {
                                    this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                                    this.SearchListCelebs('CELEBRITY')
                                }} />
                        </Card>
                        <Card
                            image={require('../assets/images/fakeCardImages/drake.jpg')}
                            featuredTitle='Drake'
                            imageStyle={{ flex: 1 }}
                        >
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
        </Text>
                            <Button
                                title='VIEW NOW'
                                onClick={() => {
                                    this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                                    this.SearchListCelebs('CELEBRITY')
                                }} />
                        </Card>
                        <Card
                            image={require('../assets/images/fakeCardImages/serena.jpg')}
                            featuredTitle='Serena Williams'
                            imageStyle={{ flex: 1 }}
                        >
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
        </Text>
                            <Button
                                title='VIEW NOW'
                                onClick={() => {
                                    this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                                    this.SearchListCelebs('CELEBRITY')
                                }} />
                        </Card>
                        <Card
                            image={require('../assets/images/fakeCardImages/andrew.jpeg')}
                            featuredTitle='Andrew Yang'
                            imageStyle={{ flex: 1 }}
                        >
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
        </Text>
                            <Button
                                title='VIEW NOW'
                                onClick={() => {
                                    this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                                    this.SearchListCelebs('CELEBRITY')
                                }} />
                        </Card>
                        <Card
                            image={require('../assets/images/fakeCardImages/michael.jpg')}
                            featuredTitle='Michael B. Jordan'
                            imageStyle={{ flex: 1 }}
                        >
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
        </Text>
                            <Button
                                title='VIEW NOW'
                                onClick={() => {
                                    this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                                    this.SearchListCelebs('CELEBRITY')
                                }} />
                        </Card>
                        <Card
                            image={require('../assets/images/fakeCardImages/taylor.jpg')}
                            featuredTitle='Taylor Swift'
                            imageStyle={{ flex: 1 }}
                        >
                            <Text style={{ marginBottom: 10 }}>
                                The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                            <Button
                                title='VIEW NOW'
                                onClick={() => {
                                    this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                                    this.SearchListCelebs('CELEBRITY')
                                }} />
                        </Card>
                    </View>
                </ScrollView>

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
                        fontSize={30}
                        iconColor="#c6c6c6"
                        shadowColor="#282828"
                        cancelIconColor="#c6c6c6"
                        backgroundColor="rgba(52, 52, 52, 0.8)"
                        placeholder="Search for..."
                        onChangeText={text => {
                            this.handleSearch(text);
                        }}
                        onPressCancel={() => {
                            this.handleSearch("");
                        }}
                        onPress={() => {
                            this.setState({ results: true, resultsCeleb: false, resultsSearch: true, resultsCharity: false })
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
                                this.setState({ results: true, resultsCeleb: false, resultsSearch: false, resultsCharity: true })
                                this.SearchTrendingCharities('Feeding America')
                            }}
                        />
                        <Trending
                            // transparent
                            title="Boys and Girl's Club"
                            onClick={() => {
                                this.setState({ results: true, resultsCeleb: false, resultsSearch: false, resultsCharity: true })
                                this.SearchTrendingCharities("Boys and Girl's Club")
                            }}
                        />
                        <Trending
                            // transparent
                            title="American Red Cross"
                            onClick={() => {
                                this.setState({ results: true, resultsCeleb: false, resultsSearch: false, resultsCharity: true })
                                this.SearchTrendingCharities("American Red Cross")
                            }}
                        />
                        <Trending
                            // transparent
                            title="Americares"
                            onClick={() => {
                                this.setState({ results: true, resultsCeleb: false, resultsSearch: false, resultsCharity: true })
                                this.SearchTrendingCharities("Americares")
                            }}
                        />
                        <Trending
                            // transparent
                            title="UNICEF USA"
                            onClick={() => {
                                this.setState({ results: true, resultsCeleb: false, resultsSearch: false, resultsCharity: true })
                                this.SearchTrendingCharities("UNICEF USA")
                            }}
                        />
                        <Trending
                            // transparent
                            title="Make-A-Wish Foundation"
                            onClick={() => {
                                this.setState({ results: true, resultsCeleb: false, resultsSearch: false, resultsCharity: true })
                                this.SearchTrendingCharities("Make-A-Wish Foundation")
                            }}
                        />
                        <Trending
                            // transparent
                            title="United Way Worldwide"
                            onClick={() => {
                                this.setState({ results: true, resultsCeleb: false, resultsSearch: false, resultsCharity: true })
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
        marginTop: 23,
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
