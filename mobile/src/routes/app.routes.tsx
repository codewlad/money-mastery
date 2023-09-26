import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { Categories } from '@screens/Categories';
import { Resume } from '@screens/Resume';
import { Profile } from '@screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
	return (
		<Navigator>
			<Screen
				name='home'
				component={Home}
			/>

			<Screen
				name='categories'
				component={Categories}
			/>

			<Screen
				name='resume'
				component={Resume}
			/>

			<Screen
				name='profile'
				component={Profile}
			/>
		</Navigator>
	);
}
