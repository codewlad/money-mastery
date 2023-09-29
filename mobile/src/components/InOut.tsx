import { HStack, useTheme } from 'native-base';

import { Octicons } from '@expo/vector-icons';

import { TextBox } from '@components/TextBox';

export function InOut() {
	const { colors } = useTheme();

	return (
		<HStack
			space={2}
			alignItems={'center'}
		>
			<TextBox
				name='12'
				width={36}
			/>
			<TextBox
				name='Carrefour'
				flex={1}
			/>
			<TextBox
				name='Mercado'
				width={20}
			/>
			<TextBox
				name='R$ -26750,00'
				width={25}
			/>

			<Octicons
				name='pencil'
				size={20}
				color={colors.gray[500]}
			/>

			<Octicons
				name='trash'
				size={20}
				color={colors.red[900]}
			/>
		</HStack>
	);
}
