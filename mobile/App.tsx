import { useState } from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { THEME } from './src/theme';

import { Loading } from '@components/Loading';
import { preventAutoHideAsync } from 'expo-splash-screen';

import { Splash } from '@screens/Splash';
import { Home } from '@screens/Home';

import { Routes } from './src/routes';

preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

	const [splashComplete, setSplashComplete] = useState(false);

	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle={'light-content'}
				backgroundColor={'black'}
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
