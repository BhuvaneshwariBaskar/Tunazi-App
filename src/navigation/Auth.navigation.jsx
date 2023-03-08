import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from '../screens/auth/Welcome.screen';
import SignIn from '../screens/auth/SignIn.screen';
import SignUp from '../screens/auth/SignUp.screen';

const { Navigator, Screen } = createStackNavigator();

const AuthNav = () => {
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName='SignUp'
				screenOptions={{ headerShown: false, animationEnabled: false }}
			>
				<Screen name='WelcomeScreen' component={WelcomeScreen} />
				<Screen name='SignIn' component={SignIn} />
				<Screen name='SignUp' component={SignUp} />
			</Navigator>
		</NavigationContainer>
	);
};

export default AuthNav;
