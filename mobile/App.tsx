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

import { SignIn } from '@screens/SignIn';
import { Splash } from '@screens/Splash';
//import { Home } from '@screens/Home';

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
					<SignIn />
				) : (
					<Splash onComplete={setSplashComplete} />
				)
			) : (
				<Loading />
			)}
		</NativeBaseProvider>
	);
}
