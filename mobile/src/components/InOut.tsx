import { useState } from 'react';
import { HStack, VStack, useTheme } from 'native-base';

import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Input } from '@components/Input';
import { TextBox } from '@components/TextBox';

import { ReleaseDTO } from '@dtos/ReleaseDTO';

type Props = {
	elementSpaceY: number;
	data: ReleaseDTO;
	setEditingId: any;
};

type VariantProps = {
	viewing: undefined;
	editing: undefined;
};

export function InOut({ elementSpaceY, data, setEditingId }: Props) {
	const { colors } = useTheme();

	const [variant, setVariant] = useState<keyof VariantProps>('viewing');

	const [day, setDay] = useState(data.day.toString());
	const [description, setDescription] = useState(data.description.toString());
	const [category, setCategory] = useState(data.category.toString());
	const [value, setValue] = useState(data.value.toString());

	function handleEditing() {
		console.log(data.id);
		setVariant('editing');
		setEditingId(data.id);
	}

	function handleViewing() {
		setVariant('viewing');
	}

	const handleSetDay = (text: string) => setDay(text);
	const handleSetDescription = (text: string) => setDescription(text);
	const handleSetCategory = (text: string) => setCategory(text);
	const handleSetValue = (text: string) => setValue(text);

	return (
		<HStack
			space={5}
			alignItems={'center'}
			mb={8}
			pointerEvents={'auto'}
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
								name={data.value}
								flex={1}
								variation='secondary'
								type='price'
							/>
						</>
					) : (
						<>
							<Input
								placeholder='Dia'
								w={37}
								value={category}
								onChangeText={handleSetCategory}
							/>

							<Input
								placeholder='Descrição'
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
