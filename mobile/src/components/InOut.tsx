import { useState } from 'react';
import { HStack, VStack, useTheme } from 'native-base';

import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { TextBox } from '@components/TextBox';

import { ReleaseDTO } from '@dtos/ReleaseDTO';

type Props = {
	elementSpaceY: number;
	data: ReleaseDTO;
};

type VariantProps = {
	viewing: undefined;
	editing: undefined;
};

export function InOut({ elementSpaceY, data }: Props) {
	const { colors } = useTheme();

	const [variant, setVariant] = useState<keyof VariantProps>('viewing');

	function handleEditing() {
		setVariant('editing');
	}

	function handleViewing() {
		setVariant('viewing');
	}

	return (
		<HStack
			space={5}
			alignItems={'center'}
			mb={8}
		>
			<VStack
				space={elementSpaceY}
				flex={1}
			>
				<HStack space={elementSpaceY}>
					<TextBox
						name={data.day}
						width={36}
						textAlign='center'
					/>
					<TextBox
						name={data.description}
						flex={1}
					/>
				</HStack>

				<HStack space={elementSpaceY}>
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
