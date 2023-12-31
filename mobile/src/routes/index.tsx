import { useTheme, Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
	const { colors } = useTheme();

	const theme = DefaultTheme;
	theme.colors.background = colors.black;
	return (
		<Box
			flex={1}
			bg={colors.black}
		>
			<NavigationContainer theme={theme}>
				<AppRoutes />
			</NavigationContainer>
		</Box>
	);
}
