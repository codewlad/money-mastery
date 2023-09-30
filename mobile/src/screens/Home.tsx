import { useState } from 'react';
import {
	FlatList,
	HStack,
	Text,
	VStack,
	Image,
	useTheme,
	View,
} from 'native-base';

import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import BackgroundImg from '@assets/background.png';

import { Header } from '@components/Header';
import { Group } from '@components/Group';
import { Input } from '@components/Input';
import { InOut } from '@components/InOut';

export function Home() {
	const { colors } = useTheme();

	const [groups, setGroups] = useState([
		'set-23',
		'ago-23',
		'jul-23',
		'jun-23',
		'mai-23',
	]);
	const [groupSelected, setGroupSelected] = useState('set-23');

	const user = {
		avatar: null,
	};

	const mock = [
		{
			id: 2,
			period: 'set-23',
			day: 1,
			description: 'Pagamento',
			category: 'Salário',
			value: 440000,
		},
		{
			id: 3,
			period: 'set-23',
			day: 2,
			description: 'Conta de luz',
			category: 'Despesas fixas',
			value: 18000,
		},
	];

	const elementSpaceY: number = 2;

	return (
		<>
			<Image
				source={BackgroundImg}
				defaultSource={BackgroundImg}
				alt='Gráfico de linha'
				resizeMode='contain'
				position={'absolute'}
				opacity={50}
				mt={5}
			/>
			<VStack
				flex={1}
				space={8}
			>
				<Header
					user={user}
					variant='home'
					title={null}
				/>

				<HStack px={5}>
					<View
						bg={'gray.900'}
						borderColor={'gray.500'}
						borderWidth={1}
						px={2}
						h={8}
						w={8}
						mr={elementSpaceY}
						justifyContent={'center'}
						alignItems={'center'}
						rounded={8}
					>
						<Octicons
							name='plus'
							size={12}
							color={colors.white}
						/>
					</View>

					<FlatList
						data={groups}
						keyExtractor={(item) => item}
						renderItem={({ item }) => (
							<Group
								elementSpaceY={elementSpaceY}
								name={item}
								isActive={groupSelected === item}
								onPress={() => setGroupSelected(item)}
							/>
						)}
						horizontal
						showsHorizontalScrollIndicator={false}
						maxH={8}
						_contentContainerStyle={{ pr: 2 }}
					/>
				</HStack>

				<VStack px={5}>
					<Text
						color={'amber.400'}
						fontSize={'xl'}
						fontFamily={'heading'}
						mb={elementSpaceY}
					>
						Lançamentos
					</Text>
					<HStack
						space={5}
						w={'full'}
					>
						<VStack
							space={elementSpaceY}
							flex={1}
						>
							<HStack space={elementSpaceY}>
								<Input
									placeholder='Dia'
									w={36}
								/>

								<Input
									placeholder='Descrição'
									flex={1}
								/>
							</HStack>
							<HStack space={elementSpaceY}>
								<Input
									placeholder='Categoria'
									w={37}
								/>

								<Input
									placeholder='Valor'
									flex={1}
								/>
							</HStack>
						</VStack>

						<HStack
							w={15}
							alignItems={'center'}
							justifyContent={'space-between'}
						>
							<Feather
								name='plus-circle'
								size={20}
								color={colors.green[900]}
							/>

							<Feather
								name='minus-circle'
								size={20}
								color={colors.red[900]}
							/>
						</HStack>
					</HStack>
				</VStack>

				<FlatList
					px={5}
					data={mock}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<InOut
							elementSpaceY={elementSpaceY}
							data={item}
						/>
					)}
				/>
			</VStack>
		</>
	);
}
