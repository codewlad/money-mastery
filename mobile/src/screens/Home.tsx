import { useEffect, useState } from 'react';
import {
	FlatList,
	HStack,
	Text,
	VStack,
	Image,
	useTheme,
	View,
	ScrollView,
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

	const [totalValue, setTotalValue] = useState('0');

	const user = {
		avatar: null,
	};

	const data = [
		{
			id: 1,
			period: 'set-23',
			day: 1,
			description: 'Pagamento',
			category: 'Salário',
			value: 440000,
		},
		{
			id: 2,
			period: 'set-23',
			day: 2,
			description: 'Conta de luz',
			category: 'Despesas fixas',
			value: -18000,
		},
		{
			id: 3,
			period: 'set-23',
			day: 3,
			description: 'Conta de água',
			category: 'Despesas fixas',
			value: -18000,
		},
		{
			id: 4,
			period: 'set-23',
			day: 4,
			description: 'Codomínio',
			category: 'Despesas fixas',
			value: -18000,
		},
		{
			id: 5,
			period: 'set-23',
			day: 5,
			description: 'Mercado',
			category: 'Despesas fixas',
			value: -18000,
		},
	];

	const elementSpaceY: number = 2;

	const [editingId, setEditingId] = useState(null);

	function formatValues(value: number) {
		return (value / 100).toLocaleString('pt-BR', {
			minimumFractionDigits: 2,
		});
	}

	useEffect(() => {
		const total = data.reduce((acc, item) => acc + item.value, 0);
		const totalFormatted = formatValues(total);
		setTotalValue(totalFormatted);
	}, []);

	useEffect(() => {
		//console.log(editingId);
	}, [setEditingId]);

	const [inputValue, setInputValue] = useState('');

	// Função criada com o ChatGPT
	const handleInputChange = (text: string) => {
		// Remove qualquer caractere não numérico, como vírgulas ou pontos
		const numericValue = text.replace(/[^0-9]/g, '');

		// Remove zeros à esquerda
		const cleanedValue = numericValue.replace(/^0+/, '');

		// Verifica se o valor é vazio após remover zeros à esquerda
		if (cleanedValue === '') {
			setInputValue('0,00'); // Define o valor padrão como 0,00 se estiver vazio
		} else {
			// Divide o valor em reais e centavos
			const reais = cleanedValue.slice(0, -2) || '0';
			const centavos = cleanedValue.slice(-2);

			// Adiciona um ponto como separador de milhar
			const formattedReais = reais.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

			// Formata o valor como "x.xxx,xx"
			const formattedValue = `${formattedReais},${centavos}`;

			setInputValue(formattedValue);
		}
	};

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

				<ScrollView
					w={'full'}
					px={5}
				>
					<VStack
						mb={8}
						pointerEvents={editingId === null ? 'auto' : 'none'}
						opacity={editingId === null ? 1 : 0.3}
					>
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
										w={10}
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
										keyboardType='numeric'
										onChangeText={handleInputChange}
										value={inputValue}
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

					<VStack flex={1}>
						{data.map((entrada, index) => {
							return (
								<InOut
									elementSpaceY={elementSpaceY}
									data={entrada}
									key={entrada.id}
									editingId={editingId}
									setEditingId={setEditingId}
								/>
							);
						})}
					</VStack>
				</ScrollView>

				<HStack
					px={5}
					mb={8}
					space={2}
					w={'full'}
					justifyContent={'flex-end'}
				>
					<Text
						color={'white'}
						fontSize={'xl'}
						fontFamily={'heading'}
						w={18}
						textAlign={'center'}
					>
						Total:
					</Text>
					<Text
						bg={'gray.900'}
						color={
							parseFloat(totalValue) >= 0
								? 'green.900'
								: 'red.900'
						}
						fontSize={'xl'}
						fontFamily={'heading'}
						h={8}
						rounded={8}
						px={2}
					>
						{`R$ ${totalValue}`}
					</Text>
				</HStack>
			</VStack>
		</>
	);
}
