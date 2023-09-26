import { Text, VStack } from 'native-base';

import { Header } from '@components/Header';

export function Resume() {
	return (
		<VStack flex={1}>
			<Header
				variant='default'
				title={'Resumo'}
			/>
			<Text>Resumo</Text>
		</VStack>
	);
}
