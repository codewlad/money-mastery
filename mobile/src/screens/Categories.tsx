import { useState } from 'react';
import {
	Text,
	VStack,
	Image,
	HStack,
	Button as ButtonNativeBase,
	useTheme,
} from 'native-base';

import { Feather } from '@expo/vector-icons';

import BackgroundImg from '@assets/background.png';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { CategoryRegistration } from '@components/CategoryRegistration';

export function Categories() {
	const { colors } = useTheme();

	const categoriesList = [
		{
			id: 1,
			category: 'Outros',
		},
		{
			id: 2,
			category: 'Salário',
		},
		{
			id: 3,
			category: 'Despesas fixas',
		},
		{
			id: 4,
			category: 'Rendimento',
		},
	];

	const [editingId, setEditingId] = useState(null);

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
					title={'Categorias'}
				/>

				<Text
					fontSize={'md'}
					fontFamily={'heading'}
					color={'white'}
					textAlign={'center'}
				>
					Adicione as categorias de gastos
				</Text>

				<HStack
					maxW={64}
					maxH={9}
					space={6}
					pointerEvents={editingId === null ? 'auto' : 'none'}
					opacity={editingId === null ? 1 : 0.3}
				>
					<Input
						flex={1}
						placeholder='Insira o nome da categoria'
					/>

					<ButtonNativeBase
						w={15}
						h={9}
						py={0}
						bg={'amber.400'}
						_pressed={{
							bg: 'amber.300',
						}}
					>
						<Feather
							name='plus-circle'
							size={20}
							color={colors.black}
						/>
					</ButtonNativeBase>
				</HStack>

				<VStack
					space={3}
					maxW={64}
				>
					{categoriesList.map((item) => (
						<CategoryRegistration
							data={item}
							key={item.id}
							editingId={editingId}
							setEditingId={setEditingId}
						/>
					))}
				</VStack>
			</VStack>
		</>
	);
}
