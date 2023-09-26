import { Text, VStack } from 'native-base';

import { Header } from '@components/Header';

export function Categories() {
	return (
		<VStack flex={1}>
			<Header
				variant='default'
				title={'Categorias'}
			/>
			<Text>Categorias</Text>
		</VStack>
	);
}
