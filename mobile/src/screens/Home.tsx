import { Text, VStack } from 'native-base';

import { Header } from '@components/Header';

export function Home() {
	const user = {
		avatar: null,
	};

	return (
		<VStack flex={1}>
			<Header
				user={user}
				variant='home'
				title={null}
			/>
			<Text>Home</Text>
		</VStack>
	);
}
