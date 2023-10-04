import { useEffect, useState } from 'react';
import { HStack, VStack, useTheme, Select, CheckIcon } from 'native-base';

import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Input } from '@components/Input';
import { TextBox } from '@components/TextBox';

import { ReleaseDTO } from '@dtos/ReleaseDTO';

type Props = {
	elementSpaceY: number;
	data: ReleaseDTO;
	editingId: number | null;
	setEditingId: any;
};

type VariantProps = {
	viewing: undefined;
	editing: undefined;
};

export function InOut({ elementSpaceY, data, editingId, setEditingId }: Props) {
	const { colors } = useTheme();

	const [variant, setVariant] = useState<keyof VariantProps>('viewing');

	const [day, setDay] = useState(data.day.toString());
	const [description, setDescription] = useState(data.description.toString());
	const [category, setCategory] = useState(data.category.toString());
	const [value, setValue] = useState(data.value.toString());

	const categoriesList = [
		'Outros',
		'Salário',
		'Despesas fixas',
		'Rendimento',
	];

	function handleEditing() {
		setVariant('editing');
		setEditingId(data.id);

		//console.log('DATA-ID', data.id);
	}

	function handleViewing() {
		setVariant('viewing');
		setEditingId(null);
	}

	const handleSetDay = (text: string) => setDay(text);
	const handleSetDescription = (text: string) => setDescription(text);
	const handleSetCategory = (text: string) => setCategory(text);
	const handleSetValue = (text: string) => setValue(text);

	function formatValues(value: number) {
		return (value / 100).toLocaleString('pt-BR', {
			minimumFractionDigits: 2,
		});
	}

	useEffect(() => {
		//console.log('EDITING-ID ->', editingId);
	}, [editingId]);

	return (
		<HStack
			space={5}
			alignItems={'center'}
			mb={8}
			pointerEvents={
				editingId === null
					? 'auto'
					: editingId === data.id
					? 'auto'
					: 'none'
			}
			opacity={editingId === null ? 1 : editingId === data.id ? 1 : 0.3}
		>
			<VStack
				space={elementSpaceY}
				flex={1}
			>
				<HStack space={elementSpaceY}>
					{variant === 'viewing' ? (
						<>
							<TextBox
								name={data.day}
								width={10}
								textAlign='center'
							/>
							<TextBox
								name={data.description}
								flex={1}
							/>
						</>
					) : (
						<>
							<Input
								placeholder='Dia'
								w={10}
								textAlign='center'
								value={day}
								onChangeText={handleSetDay}
							/>

							<Input
								placeholder='Descrição'
								flex={1}
								value={description}
								onChangeText={handleSetDescription}
							/>
						</>
					)}
				</HStack>

				<HStack space={elementSpaceY}>
					{variant === 'viewing' ? (
						<>
							<TextBox
								name={data.category}
								width={37}
								variation='secondary'
							/>
							<TextBox
								name={formatValues(data.value)}
								flex={1}
								variation='secondary'
								type='price'
							/>
						</>
					) : (
						<>
							<Select
								selectedValue={category}
								w={40}
								h={9}
								rounded={8}
								color={'white'}
								accessibilityLabel='Escolha a categoria'
								placeholder='Categoria'
								borderColor={'gray.500'}
								bg={'gray.900'}
								_selectedItem={{
									bg: 'amber.400',
									_text: {
										color: 'black',
									},
									endIcon: <CheckIcon size={'5'} />,
									rounded: 8,
								}}
								onValueChange={(itemvalue) =>
									setCategory(itemvalue)
								}
								_item={{
									bg: 'gray.900',
									rounded: '8',
									_text: {
										color: 'gray.500',
									},
									_pressed: {
										bg: 'gray.1000',
									},
								}}
								_actionSheetContent={{
									bg: 'gray.900',
								}}
							>
								{categoriesList.map((itemList) => {
									return (
										<Select.Item
											key={itemList}
											label={itemList}
											value={itemList}
										/>
									);
								})}
							</Select>

							<Input
								placeholder='Valor'
								flex={1}
								value={value}
								onChangeText={handleSetValue}
								textAlign={'right'}
							/>
						</>
					)}
				</HStack>
			</VStack>

			<HStack
				w={15}
				justifyContent={'space-between'}
			>
				{variant === 'viewing' ? (
					<>
						<Octicons
							name='pencil'
							size={20}
							color={colors.gray[500]}
							onPress={handleEditing}
						/>

						<Octicons
							name='trash'
							size={20}
							color={colors.red[900]}
						/>
					</>
				) : (
					<>
						<MaterialCommunityIcons
							name='undo'
							size={20}
							color={colors.gray[500]}
							onPress={handleViewing}
						/>

						<Octicons
							name='check-circle'
							size={20}
							color={colors.green[900]}
						/>
					</>
				)}
			</HStack>
		</HStack>
	);
}
