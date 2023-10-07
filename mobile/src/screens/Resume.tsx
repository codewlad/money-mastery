import { Text, VStack, Image, HStack } from 'native-base';

import { Header } from '@components/Header';

import BackgroundImg from '@assets/background.png';

export function Resume() {
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

					<Text color={'white'}>1</Text>
					<Text color={'white'}>2</Text>
				</VStack>
			</VStack>
		</>
	);
}
