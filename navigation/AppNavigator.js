import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import startNav from './OpeningSwitchNavigator';
// import startNav from './MainTabNavigator';
// import startNav from './ChatNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: startNav,
  })
);
