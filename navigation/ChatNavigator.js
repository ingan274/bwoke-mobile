import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Rooms from '../screens/chatSelectScreen';
import Chat from '../screens/chatScreen';

const ChatStack = createSwitchNavigator({
  Rooms: {screen: Rooms},
  Chat: {screen: Chat}
},
{
  initialRouteName: 'Rooms',
});

export default createAppContainer(ChatStack);