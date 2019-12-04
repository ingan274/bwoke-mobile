import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Tab from './MainTabNavigator';
import Event from '../screens/eventScreen';
import Login from '../screens/LoginScreen';
import Search from '../screens/searchScreen';
import SignUp from '../screens/SignUpScreen';
import Welcome from '../screens/WelcomeScreen';
import chatSelect from '../screens/chatSelectScreen';

const LoginStack = createSwitchNavigator({
  Tabs: {screen: Tab},
  Event: {screen: Event},
  Login: {screen: Login},
  SignUp: {screen: SignUp},
  Search: {screen: Search},
  Welcome: {screen: Welcome},
  chatSelect: {screen: chatSelect},
},
{
  initialRouteName: 'chatSelect',
});

export default createAppContainer(LoginStack);