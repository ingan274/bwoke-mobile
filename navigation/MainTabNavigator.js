import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, BottomTabBar } from 'react-navigation';
import Colors from '../constants/Colors'

import TabBarIcon from '../components/TabBarIcon';
import feedScreen from '../screens/feedScreen';
import mapScreen from '../screens/mapScreen';
import chatScreen from '../screens/chatSelectScreen';
import searchScreen from '../screens/searchScreen';

// import Icon from '../assets/images/bWokeLogoFavicon';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SearchStack = createStackNavigator(
  {
    Search: searchScreen, // change to search screen
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search`
          : 'md-search'
      }
    />
  )
};

SearchStack.path = '';

const MapStack = createStackNavigator(
  {
    Map: mapScreen,
  },
  config
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios-globe' ? 'ios-globe-outline' : 'md-globe'} />
  ),
};

MapStack.path = '';

const FeedStack = createStackNavigator(
  {
    Feed: feedScreen, // CHANGE THIS TO FEED SCREEN 
  },
  config
);

FeedStack.navigationOptions = {
  tabBarLabel: 'Event Feed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-list${focused ? '-box' : ''}` : `md-list${focused ? '-box' : ''}`} />
  ),
};

FeedStack.path = '';

const ChatStack = createStackNavigator(
  {
    Chat: chatScreen, // CHANGE THIS TO CHAT AND MAYBE CHAT ROOM?
  },
  config
);

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'} />
  ),
};

ChatStack.path = '';

const TabBarComponent = props => <BottomTabBar {...props} />;

const tabNavigator = createBottomTabNavigator(
  {
    SearchStack,
    MapStack,
    FeedStack,
    ChatStack
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{ backgroundColor: 'black', paddingVertical: '10' }} />
    ),
  });

tabNavigator.path = '';


export default tabNavigator;
