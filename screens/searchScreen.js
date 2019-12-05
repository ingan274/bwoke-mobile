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
import { Card, ListItem, Icon, Header, SearchBar } from 'react-native-elements';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/Colors';
import Forminput from '../components/formInput';
window.navigator.userAgent = 'ReactNative';
import Background from '../assets/images/bWokeLogoFavicon.png';
// import SearchBar from 'react-native-dynamic-search-bar';
// import SearchBar from 'react-native-search-bar';

export default class searchScreen extends Component {
    state = {
        results: false,
        resultsSearch: false,
        resultsCeleb: false,
        resultsCharity: false,
        search: '',
    };
    handleSearch = text => {
        this.setState({ search: text });
    };
    // componentDidMount() {
    //     this.refs.searchBar.focus();
    // };
    SearchBar = () => {
        let search = this.state.search;
        if (this.state.resultsSearch) {
            // search charities
            fetch(`https://bwoke.herokuapp.com/search/${search}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(response => {
                    response.map(result => {
                        return (
                            // THIS DESIGN SHOULD CHANGE
                            <Card>
                                <Text style={{ marginBottom: 10 }}>
                                    {result.organization.charityName}
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    {result.cause.causeName}
                                </Text>
                                <Text style={{ marginBottom: 10 }}>{result.mission}</Text>
                            </Card>
                        );
                    });
                });
        }
    };
    SearchTrendingCharities = charity => {
        if (this.state.resultsCharity) {
            fetch(`https://bwoke.herokuapp.com/search/charity/${charity}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(response => {
                    response.map(result => {
                        return (
                            // THIS DESIGN SHOULD CHANGE
                            <Card>
                                <Text style={{ marginBottom: 10 }}>
                                    {result.organization.charityName}
                                </Text>
                                <Text style={{ marginBottom: 10 }}>
                                    {result.cause.causeName}
                                </Text>
                                <Text style={{ marginBottom: 10 }}>{result.mission}</Text>
                            </Card>
                        );
                    });
                })
                .catch(err => console.warn(err));
        }

    };

    SearchListCelebs = celebrities => {
        if (this.state.resultsCeleb) {
            fetch(`https://bwoke.herokuapp.com/search/celeb/${celebrities}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(response => {
                    response.map(result => {
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
                        );
                    });
                })
                .catch(err => console.warn(err));
        }
    };

    topCelebsList = () => {
        if (!this.state.results) {
            return (
                <View>
                    <Card
                        image={require('../assets/images/fakeCardImages/rihanna.jpg')}
                        featuredTitle="Rihanna"
                        imageStyle={{ flex: 1 }}>
                        <Text>Believe Foundation</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.setState({ results: true, resultsCeleb: true });
                                this.SearchListCelebs('CELEBRITY');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/justin.jpg')}
                        featuredTitle="Justin Beiber"
                        imageStyle={{ flex: 1 }}>
                        <Text>ACLU of Southern California. ALS Association.Alzheimer's Association. Autism Movement Therapy. Children's Miracle Network Hospitals. City of Hope. Comic Relief.</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.setState({ results: true, resultsCeleb: true });
                                this.SearchListCelebs('CELEBRITY');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/lebron.jpg')}
                        featuredTitle="Lebron James"
                        imageStyle={{ flex: 1 }}>
                        <Text>After-School All-Stars. Muhammad Ali: A Force For Change. Boys and Girls Club of America. Children’s Defense Fund. ONEXONE.</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: true,
                                    resultsSearch: false,
                                    resultsCharity: false,
                                });
                                this.SearchListCelebs('CELEBRITY');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/drake.jpg')}
                        featuredTitle="Drake"
                        imageStyle={{ flex: 1 }}>
                        <Text>Jamaican Learning Center. Allan Slaight Award. Union Gospel Mission of Portland. Inaugural Houston Appreciation Weekend. Houston Appreciation Weekend Celebrity Softball Game. Hurricane Harvey Relief.</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: true,
                                    resultsSearch: false,
                                    resultsCharity: false,
                                });
                                this.SearchListCelebs('CELEBRITY');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/serena.jpg')}
                        featuredTitle="Serena Williams"
                        imageStyle={{ flex: 1 }}>
                        <Text>Build African Schools. Common Ground Foundation. Elton John AIDS Foundation. Eva Longoria Foundation. Global Goals. Great Ormond Street Hospital. Hearts of Gold.</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: true,
                                    resultsSearch: false,
                                    resultsCharity: false,
                                });
                                this.SearchListCelebs('CELEBRITY');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/andrew.jpeg')}
                        featuredTitle="Andrew Yang"
                        imageStyle={{ flex: 1 }}>
                        <Text>Venture for America</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: true,
                                    resultsSearch: false,
                                    resultsCharity: false,
                                });
                                this.SearchListCelebs('CELEBRITY');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/michael.jpg')}
                        featuredTitle="Michael B. Jordan"
                        imageStyle={{ flex: 1 }}>
                        <Text>Boys' and Girls' Clubs of America, UNCF/College Fund, Special Olympics</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: true,
                                    resultsSearch: false,
                                    resultsCharity: false,
                                });
                                this.SearchListCelebs('CELEBRITY');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/taylor.jpg')}
                        featuredTitle="Taylor Swift"
                        imageStyle={{ flex: 1 }}>
                        <Text>Tennessee Equality Project</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: true,
                                    resultsSearch: false,
                                    resultsCharity: false,
                                });
                                this.SearchListCelebs('CELEBRITY');
                            }}
                        />
                    </Card>
                </View>
            );
        }
    };

    render() {


        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    {/* <SearchBar
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
                            this.setState({ results: true, resultsCeleb: false, resultsSearch: true , resultsCharity: false })
                            this.SearchBar()
                        }}
                    /> */}
                    {/* <SearchBar
                        ref="searchBar"
                        placeholder="Search for..."
                        onChangeText={text => {
                            this.handleSearch(text);
                        }}
                        onSearchButtonPress={() => {
                            this.handleSearch("");
                            this.refs.searchBar.unFocus;
                        }}
                        onCancelButtonPress={() => {
                            this.setState({ results: true, resultsCeleb: false, resultsSearch: true, resultsCharity: false })
                            this.searchBar();
                        }}
                    /> */}
                    <SearchBar
                        round
                        onChangeText={text => {
                            this.handleSearch(text);
                        }}
                        placeholder='Type Here...' />
                    <ScrollView
                        horizontal={true}
                        snapToInterval={200} //your element width
                        decelerationRate={0.9}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, marginBottom: 10 }}
                    // snapToAlignment={"center"}
                    >
                        {/* should we focus these on charities? */}
                        <Trending
                            // transparent
                            title="Feeding America"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: false,
                                    resultsSearch: false,
                                    resultsCharity: true,
                                });
                                this.SearchTrendingCharities('Feeding America');
                            }}
                        />
                        <Trending
                            // transparent
                            title="Boys and Girl's Club"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: false,
                                    resultsSearch: false,
                                    resultsCharity: true,
                                });
                                this.SearchTrendingCharities("Boys and Girl's Club");
                            }}
                        />
                        <Trending
                            // transparent
                            title="American Red Cross"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: false,
                                    resultsSearch: false,
                                    resultsCharity: true,
                                });
                                this.SearchTrendingCharities('American Red Cross');
                            }}
                        />
                        <Trending
                            // transparent
                            title="Americares"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: false,
                                    resultsSearch: false,
                                    resultsCharity: true,
                                });
                                this.SearchTrendingCharities('Americares');
                            }}
                        />
                        <Trending
                            // transparent
                            title="UNICEF USA"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: false,
                                    resultsSearch: false,
                                    resultsCharity: true,
                                });
                                this.SearchTrendingCharities('UNICEF USA');
                            }}
                        />
                        <Trending
                            // transparent
                            title="Make-A-Wish Foundation"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: false,
                                    resultsSearch: false,
                                    resultsCharity: true,
                                });
                                this.SearchTrendingCharities('Make-A-Wish Foundation');
                            }}
                        />
                        <Trending
                            // transparent
                            title="United Way Worldwide"
                            onClick={() => {
                                this.setState({
                                    results: true,
                                    resultsCeleb: false,
                                    resultsSearch: false,
                                    resultsCharity: true,
                                });
                                this.SearchTrendingCharities('United Way Worldwide');
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
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.black,
        // paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: color.green,
        // marginBottom: 250,
        // marginTop: 30,
    },
});
const StyledButton = styled.TouchableOpacity`
   background-color:${props => (props.transparent ? 'transparent' : '#f3f8ff')};
   padding:15px;
   border:${props => (props.transparent ? '1px solid #f3f8ff ' : 0)}
   justify-content:center;
   margin-bottom:20px;
   border-radius:24px
  `;
const TrendingButton = styled.TouchableOpacity`
   background-color:${props => (props.transparent ? 'transparent' : '#f3f8ff')};
   padding: 12px;
   border:${props => (props.transparent ? '1px solid #f3f8ff ' : 0)}
   justify-content:center;
   margin-bottom:0px;
   margin-top:10px;
   margin-left:10px;
   border-radius:24px;
  `;
const StyledTitle = styled.Text`
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    letter-spacing: 3;
    color: ${props => (props.transparent ? '#f3f8ff ' : '#666')};
  `;
const StyledTitleTrend = styled.Text`
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2;
    color: ${props => (props.transparent ? '#f3f8ff ' : '#666')};
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
        <StyledButton {...props} onPress={props.onClick}>
            <StyledTitle {...props}>{props.title}</StyledTitle>
        </StyledButton>
    );
};
