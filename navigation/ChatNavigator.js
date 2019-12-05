import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Rooms from '../screens/chatRoom';
import Chat from '../screens/chatScreen';

// import Chat from '../screens/chatRoom';
// import Rooms from '../screens/chatScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      Chat: { screen: Chat },
      Room: { screen: Rooms },
      
    },
    {
      initialRouteName: 'Room',
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    }
  )
);
