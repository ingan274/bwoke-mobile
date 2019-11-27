import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, BottomTabBar } from 'react-navigation';
import Colors from '../constants/Colors'

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SearchStack = createStackNavigator(
  {
    Search: HomeScreen, // change to search screen
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
    Map: LinksScreen,
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
    Feed: SettingsScreen, // CHANGE THIS TO FEED SCREEN 
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
    Chat: SettingsScreen, // CHANGE THIS TO CHAT AND MAYBE CHAT ROOM?
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
