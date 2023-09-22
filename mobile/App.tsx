import { useState } from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { Home } from './src/screens/Home';
import { Splash } from './src/screens/Splash';

import { preventAutoHideAsync } from 'expo-splash-screen';

preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

	const [splashComplete, setSplashComplete] = useState(false);

	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle={'light-content'}
				backgroundColor={'transparent'}
				translucent
			/>
			{fontsLoaded ? (
				splashComplete ? (
					<Home />
				) : (
					<Splash onComplete={setSplashComplete} />
				)
			) : (
				<Loading />
			)}
		</NativeBaseProvider>
	);
}
