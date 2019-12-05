// import React, { Component } from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Dimensions,
//     ScrollView,
//     // View,
//     Text,
//     Navigator,
//     PropTypes,
//     // Image,
//     // ImageBackground,
//     // TouchableOpacity,
//     ActivityIndicator,

// // } from 'react-native';
// // import addEventModal from '../components/addEventModal'
// // import { ListItem, Icon, Header, } from 'react-native-elements'
// // import styled from "styled-components/native";
// // import { Ionicons } from '@expo/vector-icons';
// // import color from '../constants/Colors';
// // import Forminput from "../components/formInput";
// // // import SearchBar from "../components/SearchBar.js";
// // import Background from "../assets/images/bWokeLogoFavicon.png";
// // import SearchBar from 'react-native-dynamic-search-bar';

// // window.navigator.userAgent = 'ReactNative';

// import {
//     Card,
//     Caption,
//     Divider,
//     Image,
//     ImageBackground,
//     ListView,
//     Tile,
//     Title,
//     Subtitle,
//     // Overlay,
//     Screen,
//     GridRow,
//     TouchableOpacity,
//     // NavigationBar,
//     View,
// } from '@shoutem/ui';

// import ModalButton from '../components/modalButton';

// export default class EventFeed extends Component {
//     constructor(props) {
//         super(props);
//         this.renderRow = this.renderRow.bind(this);
//         this.state = {
//             restaurants: [
//                 {
//                     "name": "Butt McGee",
//                     "address": "185 Sutter St, San Francisco, CA 94109",
//                     "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
//                 },
//                 {
//                     "name": "Chalk Point Kitchen",
//                     "address": "527 Broome St, New York, NY 10013",
//                     "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
//                 },
//                 {
//                     "name": "Kyoto Amber Upper East",
//                     "address": "225 Mulberry St, New York, NY 10012",
//                     "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
//                 }
//             ],
//         }
//     }

//     renderRow(rowData, sectionId, index) {
//         // rowData contains grouped data for one row,
//         // so we need to remap it into cells and pass to GridRow
//         if (index === '0') {
//             return (
//                 <TouchableOpacity key={index}>
//                     <ImageBackground
//                         styleName="large"
//                         source={{ uri: rowData[0].image.url }}
//                     >
//                         <Tile>
//                             <Title styleName="md-gutter-bottom">{rowData[0].name}</Title>
//                             <Subtitle styleName="sm-gutter-horizontal">{rowData[0].address}</Subtitle>
//                         </Tile>
//                     </ImageBackground>
//                     <Divider styleName="line" />
//                 </TouchableOpacity>
//             );
//         }

//         const cellViews = rowData.map((restaurant, id) => {
//             return (
//                 <TouchableOpacity key={id} styleName="flexible">
//                     <Card styleName="flexible">
//                         <Image
//                             styleName="medium-wide"
//                             source={{ uri: restaurant.image.url }}
//                         />
//                         <View styleName="content">
//                             <Subtitle numberOfLines={3}>{restaurant.name}</Subtitle>
//                             <View styleName="horizontal">
//                                 <Caption styleName="collapsible" numberOfLines={2}>{restaurant.address}</Caption>
//                             </View>
//                         </View>
//                     </Card>
//                 </TouchableOpacity>
//             );
//         });

//         return (
//             <GridRow columns={2}>
//                 {cellViews}
//             </GridRow>
//         );
//     }

//     render() {
//         const restaurants = this.state.restaurants;
//         // Group the restaurants into rows with 2 columns, except for the
//         // first restaurant. The first restaurant is treated as a featured restaurant
//         let isFirstArticle = true;
//         const groupedData = GridRow.groupByRows(restaurants, 2, () => {
//             if (isFirstArticle) {
//                 isFirstArticle = false;
//                 return 2;
//             }
//             return 1;
//         });

//         return (
//             <Screen>
//                 {/* <NavigationBar
//                     title="Restaurants"
//                     styleName="inline"
//                 /> */}
//                 <ListView
//                     data={groupedData}
//                     renderRow={this.renderRow}
//                 />
//                 <ModalButton />
//             </Screen>
//         );
//     }
// }


// // const styles = StyleSheet.create({
// //     container: {
// //         width: "100%",
// //         height: "100%",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         // backgroundColor: color.black,
// //         // paddingVertical: 12,
// //         borderRadius: 4,
// //         borderWidth: StyleSheet.hairlineWidth,
// //         borderColor: color.green,
// //         // marginBottom: 250,
// //         // marginTop: 30,
// //     },
// //     text: {
// //         color: 'white',
// //         textAlign: "center",
// //         height: 20
// //     },
// //     trendingButton: {
// //         borderRadius: 24,
// //         marginLeft: 5,
// //     }
// // });

// // const StyledButton = styled.TouchableOpacity`
// //    background-color:${props => (props.transparent ? "transparent" : "#f3f8ff")};
// //    padding:15px;
// //    border:${props => (props.transparent ? "1px solid #f3f8ff " : 0)}
// //    justify-content:center;
// //    margin-bottom:20px;
// //    border-radius:24px
// //   `;
// // const TrendingButton = styled.TouchableOpacity`
// //    background-color:${props => (props.transparent ? "transparent" : "#f3f8ff")};
// //    padding:15px;
// //    border:${props => (props.transparent ? "1px solid #f3f8ff " : 0)}
// //    justify-content:center;
// //    margin-bottom:0px;
// //    margin-top:10px;
// //    margin-left:10px;
// //    border-radius:24px
// //   `;
// // StyledTitle = styled.Text`
// //     text-transform: uppercase;
// //     text-align: center;
// //     font-weight: bold;
// //     letter-spacing: 3;
// //     color: ${props => (props.transparent ? "#f3f8ff " : "#666")};
// //   `;

// // export const Trending = ({ onPress, color, ...props }) => {
// //     return (
// //         <TrendingButton {...props}>
// //             <StyledTitle {...props}>{props.title}</StyledTitle>
// //         </TrendingButton>
// //     );
// // };
// // export const Button = ({ onPress, color, ...props }) => {
// //     return (
// //         <StyledButton {...props}>
// //             <StyledTitle {...props}>{props.title}</StyledTitle>
// //         </StyledButton>
// //     );
// // };
