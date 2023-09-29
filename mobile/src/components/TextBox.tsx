import { Text, View } from 'native-base';

type Props = {
	name: string;
	width?: number;
	flex?: number;
};

export function TextBox({ name, width, flex }: Props) {
	return (
		<View
			bgColor={'gray.900'}
			px={2}
			py={'5px'}
			rounded={8}
			width={width}
			flex={flex}
		>
			<Text
				color={'gray.500'}
				fontSize={'xs'}
			>
				{name}
			</Text>
		</View>
	);
}
