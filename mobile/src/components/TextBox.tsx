import { Text, View, HStack } from 'native-base';

type Props = {
	name: string | number;
	width?: number;
	flex?: number;
	variation?: 'primary' | 'secondary';
	type?: 'default' | 'price';
	textAlign?: 'left' | 'center' | 'right';
};

export function TextBox({
	name,
	width,
	flex,
	variation = 'primary',
	type = 'default',
	textAlign = 'left',
}: Props) {
	return (
		<View
			bgColor={variation === 'primary' ? 'gray.900' : 'gray.1000'}
			h={9}
			px={2}
			borderWidth={1}
			borderColor={'gray.900'}
			rounded={8}
			width={width}
			flex={flex}
			justifyContent={'center'}
		>
			{type === 'price' ? (
				<HStack justifyContent={'space-between'}>
					<Text
						color={'gray.500'}
						fontSize={'xs'}
					>
						R$
					</Text>
					<Text
						color={'gray.500'}
						fontSize={'xs'}
					>
						{name}
					</Text>
				</HStack>
			) : (
				<Text
					color={'gray.500'}
					fontSize={'xs'}
					textAlign={textAlign}
				>
					{name}
				</Text>
			)}
		</View>
	);
}
