import { useTheme } from 'native-base';
import {
	createBottomTabNavigator,
	BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { Categories } from '@screens/Categories';
import { Resume } from '@screens/Resume';
import { Profile } from '@screens/Profile';

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

type AppRoutes = {
	home: undefined;
	categories: undefined;
	resume: undefined;
	profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
	const { sizes, colors } = useTheme();

	const iconSize = sizes[6];

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: colors.amber[400],
				tabBarInactiveTintColor: colors.gray[500],
				tabBarStyle: {
					backgroundColor: colors.gray[900],
					borderTopWidth: 0,
					height: 96,
					paddingTop: sizes[9],
					paddingBottom: sizes[9],
				},
			}}
		>
			<Screen
				name='home'
				component={Home}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome
							name='home'
							size={iconSize}
							color={color}
						/>
					),
				}}
			/>

			<Screen
				name='categories'
				component={Categories}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome
							name='list-ul'
							size={iconSize}
							color={color}
						/>
					),
				}}
			/>

			<Screen
				name='resume'
				component={Resume}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5
							name='coins'
							size={iconSize}
							color={color}
						/>
					),
				}}
			/>

			<Screen
				name='profile'
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome
							name='user-circle-o'
							size={iconSize}
							color={color}
						/>
					),
				}}
			/>
		</Navigator>
	);
}
