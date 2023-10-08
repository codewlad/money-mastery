import { useState } from 'react';
import { Text, VStack, Image, HStack, FlatList } from 'native-base';

import { Header } from '@components/Header';

import BackgroundImg from '@assets/background.png';
import { ExpensesPerMonth } from '@components/ExpensesPerMonth';

export function Resume() {
	const resumeData = [
		{
			id: 2,
			year: 2023,
			month: 'Setembro',
			in: 200000,
			out: -18000,
			balance: 182000,
			recordsByCategory: [
				{
					id: 3,
					Category: 'Salário',
					value: 200000,
				},
				{
					id: 4,
					Category: 'Despesas fixas',
					value: -18000,
				},
			],
		},
		{
			id: 1,
			year: 2023,
			month: 'Agosto',
			in: 100000,
			out: -10000,
			balance: 90000,
			recordsByCategory: [
				{
					id: 1,
					Category: 'Salário',
					value: 100000,
				},
				{
					id: 2,
					Category: 'Despesas fixas',
					value: -10000,
				},
			],
		},
	];

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
				alignItems={'center'}
			>
				<Header
					variant='default'
					title={'Resumo'}
				/>
				<Text
					fontSize={'md'}
					fontFamily={'heading'}
					color={'white'}
					textAlign={'center'}
				>
					Confira o saldo mensal
				</Text>

				<VStack
					space={3}
					px={5}
					w={'full'}
				>
					<HStack space={4}>
						<Text
							color={'amber.400'}
							fontSize={'xs'}
							fontFamily={'heading'}
							w={14}
							textAlign={'center'}
						>
							Ano
						</Text>
						<Text
							color={'amber.400'}
							fontSize={'xs'}
							fontFamily={'heading'}
							flex={1}
							textAlign={'center'}
						>
							Mês
						</Text>
						<Text
							color={'amber.400'}
							fontSize={'xs'}
							fontFamily={'heading'}
							flex={1}
							textAlign={'center'}
						>
							Saldo
						</Text>
						<Text
							color={'amber.400'}
							fontSize={'xs'}
							fontFamily={'heading'}
							w={14}
							textAlign={'center'}
						>
							Detalhes
						</Text>
					</HStack>

					<FlatList
						data={resumeData}
						renderItem={({ item }) => (
							<ExpensesPerMonth data={item} />
						)}
					/>
				</VStack>
			</VStack>
		</>
	);
}
