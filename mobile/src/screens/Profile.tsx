import { Text, VStack } from 'native-base';

import { Header } from '@components/Header';

export function Profile() {
	return (
		<VStack flex={1}>
			<Header
				variant='default'
				title={'Perfil'}
			/>
			<Text>Perfil</Text>
		</VStack>
	);
}
