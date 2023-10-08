import React, { useState } from 'react';
import {
	HStack,
	VStack,
	Button as ButtonNativeBase,
	useTheme,
	Text,
} from 'native-base';

import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { TextBox } from '@components/TextBox';

export function ExpensesPerMonth({ data }: any) {
	const { colors } = useTheme();

	const [detailsIsOpen, setDetailsIsOpen] = useState<boolean>(false);

	const toggleDetails = () =>
		detailsIsOpen ? setDetailsIsOpen(false) : setDetailsIsOpen(true);

	const formatValues = (value: number) => {
		return (value / 100).toLocaleString('pt-BR', {
			minimumFractionDigits: 2,
		});
	};

	return (
		<VStack
			space={3}
			w={'full'}
			mr={5}
			mb={3}
		>
			<HStack space={4}>
				<TextBox
					name={data.year}
					width={14}
					textAlign='center'
				/>

				<TextBox
					name={data.month}
					flex={1}
				/>

				<TextBox
					name={formatValues(data.balance)}
					type='price'
					flex={1}
				/>

				<ButtonNativeBase
					w={14}
					h={8}
					py={0}
					bg={'gray.500'}
					_pressed={{
						bg: 'gray.400',
					}}
					onPress={toggleDetails}
				>
					{detailsIsOpen ? (
						<MaterialCommunityIcons
							name='arrow-up-right'
							size={20}
							color={colors.black}
						/>
					) : (
						<Entypo
							name='list'
							size={20}
							color={colors.black}
						/>
					)}
				</ButtonNativeBase>
			</HStack>

			{detailsIsOpen && <Text color={'white'}>Opa</Text>}
		</VStack>
	);
}
