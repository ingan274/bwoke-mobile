import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Tab from './MainTabNavigator';
import Login from '';
import SignUp from '';

const LoginStack = createSwitchNavigator({
  Tabs: {screen: Tab},
  Login: {screen: Login},
  SignUp: {screen: SignUp},
},
{
  initialRouteName: 'Login',
});

export default createAppContainer(LoginStack);