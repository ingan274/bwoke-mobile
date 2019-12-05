import React, { PureComponent, Component } from 'react';
import * as WebBrowser from 'expo-web-browser';
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
        search: '',
        charity: [],
        results: false
    };
    handleSearch = text => {
        this.setState({ search: text });
        console.log(text)
    };
    SearchBar = () => {
        let search = this.state.search;
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
                this.setState({ charity: response })
                console.log(response)
                this.setState({ results: true })
            });
    };

    SearchTrendingCharities = charity => {
        fetch(`https://bwoke.herokuapp.com/search/charity/${charity}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(response => {
                this.setState({ charity: [response] })
                console.log("charity", this.state.charity)
                this.setState({ results: true })
            })
            .catch(err => console.warn(err));

    };

    SearchListCelebs = celebrities => {

        fetch(`https://bwoke.herokuapp.com/search/celeb/${celebrities}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(response => {
                this.setState({ charity: response })
                console.log("celebrity Response", response)
                console.log("charity", this.state.charity)
                this.setState({ results: true })
            })
            .catch(err => console.warn(err));
    };

    topCelebsList = () => {
        if (!this.state.results) {
            return (
                <View  >
                    <Card
                        image={require('../assets/images/fakeCardImages/rihanna.jpg')}
                        featuredTitle="Rihanna"
                        imageStyle={{ flex: 1 }}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            Alzheimer's Association. Bear Necessities Pediatric Cancer Foundation. Believe Foundation. BID 2 BEAT AIDS. City of Hope. Clara Lionel Foundation. Designers Against AIDS. DKMS. DoSomething.org. Entertainment Industry Foundation. Feeding America
                        </Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.SearchListCelebs('Rihanna');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/justin.jpg')}
                        featuredTitle="Justin Beiber"
                        imageStyle={{ flex: 1 }}>
                        <Text style={{ marginBottom: 10 }}>ACLU of Southern California. ALS Association. Alzheimer's Association. Autism Movement Therapy. Children's Miracle Network Hospitals. City of Hope. Comic Relief.</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.SearchListCelebs('Justin Beiber');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/lebron.jpg')}
                        featuredTitle="Lebron James"
                        imageStyle={{ flex: 1 }}>
                        <Text style={{ marginBottom: 10 }}>After-School All-Stars. Muhammad Ali: A Force For Change. Boys and Girls Club of America. Children’s Defense Fund. ONEXONE.</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.SearchListCelebs('Lebron James');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/drake.jpg')}
                        featuredTitle="Drake"
                        imageStyle={{ flex: 1 }}>
                        <Text style={{ marginBottom: 10 }}>Jamaican Learning Center. Allan Slaight Award. Union Gospel Mission of Portland. Inaugural Houston Appreciation Weekend. Houston Appreciation Weekend Celebrity Softball Game. Hurricane Harvey Relief.</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.SearchListCelebs('Drake');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/serena.jpg')}
                        featuredTitle="Serena Williams"
                        imageStyle={{ flex: 1 }}>
                        <Text style={{ marginBottom: 10 }}>Build African Schools. Common Ground Foundation. Elton John AIDS Foundation. Eva Longoria Foundation. Global Goals. Great Ormond Street Hospital. Hearts of Gold.</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.SearchListCelebs('Serena Williams');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/andrew.jpeg')}
                        featuredTitle="Andrew Yang"
                        imageStyle={{ flex: 1 }}>
                        <Text style={{ marginBottom: 10 }}>Venture for America</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.SearchListCelebs('Andrew Yang');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/michael.jpg')}
                        featuredTitle="Michael B. Jordan"
                        imageStyle={{ flex: 1 }}>
                        <Text style={{ marginBottom: 10 }}>Boys' and Girls' Clubs of America, UNCF/College Fund, Special Olympics</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.SearchListCelebs('Michael B. Jordan');
                            }}
                        />
                    </Card>
                    <Card
                        image={require('../assets/images/fakeCardImages/taylor.jpg')}
                        featuredTitle="Taylor Swift"
                        imageStyle={{ flex: 1 }}>
                        <Text style={{ marginBottom: 10 }}>Tennessee Equality Project</Text>
                        <Button
                            title="VIEW NOW"
                            onClick={() => {
                                this.SearchListCelebs('Taylor Swift');
                            }}
                        />
                    </Card>
                </View>
            );
        }
    };
    render = () => {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={styles.container}
                >
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
                           
                        }}
                        onPress={() => {
                            this.setState({ results: true, resultsCeleb: false, resultsSearch: true , resultsCharity: false })
                            this.SearchBar()
                        }}
                    /> */}
                    <View style={styles.search}>
                        <SearchBar
                            ref="searchBar"
                            placeholder="Search for..."
                            value={this.state.search}
                            containerStyle={{ width: '90%' }}
                            onChangeText={text => {
                                this.handleSearch(text);
                            }}
                            onSearchButtonPress={() => {
                                this.SearchBar();
                            }}
                            onCancelButtonPress={() => {
                                this.handleSearch("");
                            }}
                        />
                        <Ionicons
                            name={
                                Platform.OS === 'ios' ? 'ios-send' : 'md-send'
                            }
                            size={40}
                            style={styles.searchbtn}
                            onPress={() => {
                                this.SearchBar();
                            }}
                        />
                    </View>
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
                            title="Alzheimers Association"
                            onClick={() => {
                                this.SearchTrendingCharities('Alzheimers Association');
                            }}
                        />
                        <Trending
                            // transparent
                            title="City of Hope"
                            onClick={() => {
                                this.SearchTrendingCharities("City of Hope");
                            }}
                        />
                        <Trending
                            // transparent
                            title="American Red Cross"
                            onClick={() => {
                                this.SearchTrendingCharities('American Red Cross');
                            }}
                        />
                        <Trending
                            // transparent
                            title="Americares"
                            onClick={() => {
                                this.SearchTrendingCharities('Americares');
                            }}
                        />
                        <Trending
                            // transparent
                            title="UNICEF USA"
                            onClick={() => {
                                this.SearchTrendingCharities('UNICEF USA');
                            }}
                        />
                        <Trending
                            // transparent
                            title="Make-A-Wish Foundation"
                            onClick={() => {
                                this.SearchTrendingCharities('Make-A-Wish Foundation');
                            }}
                        />
                        <Trending
                            // transparent
                            title="United Way Worldwide"
                            onClick={() => {
                                this.SearchTrendingCharities('United Way Worldwide');
                            }}
                        />
                    </ScrollView>
                    <ScrollView >
                        {this.topCelebsList()}
                        {this.state.charity.map((results, i) => {
                            console.log("results", results)

                            let url = results.url;
                            let mission = results.mission;
                            let name = results.name;
                            let tagline = results.tagline;
                            let cause = results.cause;

                            return (
                                <View style={styles.resultsCard} key={i}>
                                    <Card
                                        featuredTitle={name}
                                        imageStyle={{ flex: 1 }}
                                        image={require('../assets/images/fakeCardImages/987-700x500.jpg')}
                                    >
                                        <Text style={{ marginBottom: 20 }}>
                                            {tagline}
                                        </Text>
                                        <Text style={{ marginBottom: 20 }}>
                                            {cause}
                                        </Text>
                                        <Text style={{ marginBottom: 30 }}>
                                            {mission}
                                        </Text>
                                        <Button
                                            title='Go to Website'
                                            onClick={() => this.website(url)} />
                                    </Card>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback >
        );
    }

    website = (url) => {
        WebBrowser.openBrowserAsync(
            `${url}`
        );
    }
}

searchScreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: color.black,
        paddingTop: 32,
    },
    card: {
        width: '120%'
    },
    resultsCard: {
        marginVertical: 40,
    },
    search: {
        flexDirection: 'row',
        alignItems: "center",
    },
    searchbtn: {
        color: color.text,
        paddingHorizontal: 10,
    },
    resultLow: {
        marginBottom: 80,
    }
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
    height: 15;
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
