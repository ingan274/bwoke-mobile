import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, BottomTabBar, Stylesheet } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import feedScreen from '../screens/feedScreen';
import mapScreen from '../screens/mapScreen';
// import chatScreen from './ChatNavigator';
import chatSelect from '../screens/chatSelectScreen';
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
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} />
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
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-list${focused ? '-box' : ''}` : `md-list${focused ? '-box' : ''}`} />
  ),
};

FeedStack.path = '';

const ChatStack = createStackNavigator(
  {
    Chat: chatSelect, // CHANGE THIS TO CHAT AND MAYBE CHAT ROOM?
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
