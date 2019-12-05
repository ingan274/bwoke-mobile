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
import {
    Card,
    ListItem,
    Icon,
    Header,
} from 'react-native-elements'
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors'
import Forminput from "../components/formInput";
// import SearchBar from "../components/SearchBar.js";
window.navigator.userAgent = 'ReactNative';
import CelebCard from "../components/celebrityCard"
import SearchBar from 'react-native-dynamic-search-bar';
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';

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

                        response.map((result) => {
                            let orgName = result.name
                            let tagline = result.tagLine
                            let cause = result.cause
                            let mission = result.mission
                            let url = result.url
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

                        })
                    }

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
                        let tagline = response.tagLine
                        let cause = response.cause
                        let mission = response.mission
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
                        response.map((result) => {
                            let orgName = result.name
                            let tagline = result.tagLine
                            let cause = result.cause
                            let mission = result.mission
                            let url = result.url
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

                        })
                    }
                })
                .catch(err => console.warn(err))
        }
    }

    topCelebsList = () => {
        if (!this.state.results) {
            return (
                <ScrollView>
                    <CelebCard
                        image={require(`../assets/images/fakeCardImages/rihanna.jpg`)}
                        celeb="Rihanna"
                        onClick={() => {
                            this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                            this.SearchListCelebs('Rihanna')
                        }} />
                    <CelebCard
                        image={require(`../assets/images/fakeCardImages/justin.jpg`)}
                        celeb="Justin Beiber"
                        onClick={() => {
                            this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                            this.SearchListCelebs('Justin Beiber')
                        }} />
                    <CelebCard
                        image={require(`../assets/images/fakeCardImages/lebron.jpg`)}
                        celeb="Lebron James"
                        onClick={() => {
                            this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                            this.SearchListCelebs('Lebron James')
                        }} />
                    <CelebCard
                        image={require(`../assets/images/fakeCardImages/drake.jpg`)}
                        celeb="Drake"
                        onClick={() => {
                            this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                            this.SearchListCelebs('Drake')
                        }} />
                    <CelebCard
                        image={require(`../assets/images/fakeCardImages/serena.jpg`)}
                        celeb="Serena Williams"
                        onClick={() => {
                            this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                            this.SearchListCelebs('Serena Williams')
                        }} />
                    <CelebCard
                        image={require(`../assets/images/fakeCardImages/andrew.jpeg`)}
                        celeb="Andrew Yang"
                        onClick={() => {
                            this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                            this.SearchListCelebs('Andrew Yang')
                        }} />
                    <CelebCard
                        image={require(`../assets/images/fakeCardImages/michael.jpg`)}
                        celeb="Michael B. Jordan"
                        onClick={() => {
                            this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                            this.SearchListCelebs('Michael B. Jordan')
                        }} />
                    <CelebCard
                        image={require(`../assets/images/fakeCardImages/taylor.jpg`)}
                        celeb="Taylor Swift"
                        onClick={() => {
                            this.setState({ results: true, resultsCeleb: true, resultsSearch: false, resultsCharity: false })
                            this.SearchListCelebs('Taylor Swift')
                        }} />
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

                    {this.topCelebsList()}
                    <ScrollView>
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
