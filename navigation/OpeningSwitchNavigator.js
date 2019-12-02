import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Tab from './MainTabNavigator';
import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignUpScreen';
import Welcome from '../screens/WelcomeScreen';

const LoginStack = createSwitchNavigator({
  Tabs: {screen: Tab},
  Login: {screen: Login},
  SignUp: {screen: SignUp},
  Welcome: {screen: Welcome},
},
{
  initialRouteName: 'Search',
});

export default createAppContainer(LoginStack);