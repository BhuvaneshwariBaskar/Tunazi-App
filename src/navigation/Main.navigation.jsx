import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home.screen';

const { Navigator, Screen } = createStackNavigator();

const MainNav = () => {
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName='Home'
				screenOptions={{ headerShown: false, animationEnabled: false }}
				detachInactiveScreens={true}
			>
				<Screen name='Home' component={Home} />
			</Navigator>
		</NavigationContainer>
	);
};

export default MainNav;
