import { useEffect, useState } from 'react';
import { HStack, VStack, useTheme, Select, CheckIcon } from 'native-base';

import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Input } from '@components/Input';
import { TextBox } from '@components/TextBox';

import { CategoryDTO } from '@dtos/CategoryDTO';

type Props = {
	data: CategoryDTO;
	editingId: number | null;
	setEditingId: any;
};

type VariantProps = {
	viewing: undefined;
	editing: undefined;
};

export function CategoryRegistration({ data, editingId, setEditingId }: Props) {
	const { colors } = useTheme();

	const [variant, setVariant] = useState<keyof VariantProps>('viewing');

	const [categoryId, setCategoryId] = useState(data.id.toString());
	const [category, setCategory] = useState(data.category.toString());

	const handleSetCategory = (text: string) => setCategory(text);

	function handleEditing() {
		setVariant('editing');
		setEditingId(data.id);

		//console.log('DATA-ID', data.id);
	}

	function handleViewing() {
		setVariant('viewing');
		setEditingId(null);
	}

	useEffect(() => {
		//console.log('EDITING-ID ->', editingId);
	}, [editingId]);

	return (
		<HStack
			space={5}
			alignItems={'center'}
			mb={0}
			pointerEvents={
				editingId === null
					? 'auto'
					: editingId === data.id
					? 'auto'
					: 'none'
			}
			opacity={editingId === null ? 1 : editingId === data.id ? 1 : 0.3}
		>
			<HStack
				space={6}
				alignItems={'center'}
			>
				{variant === 'viewing' ? (
					<TextBox
						name={data.category}
						flex={1}
						textAlign='left'
					/>
				) : (
					<Input
						placeholder='Data'
						flex={1}
						value={data.category}
						onChangeText={handleSetCategory}
					/>
				)}

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
		</HStack>
	);
}
