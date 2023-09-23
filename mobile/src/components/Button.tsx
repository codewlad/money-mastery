import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
	title: string;
	variant?: 'solid' | 'outline';
};

export function Button({ title, variant = 'solid', ...rest }: Props) {
	return (
		<ButtonNativeBase
			w={'full'}
			h={10}
			px={4}
			py={0}
			bg={variant === 'outline' ? 'black' : 'amber.400'}
			borderWidth={variant === 'outline' ? 1 : 0}
			borderColor={'amber.400'}
			rounded={8}
			_pressed={{
				bg: variant === 'outline' ? 'gray.900' : 'amber.300',
			}}
			{...rest}
		>
			<Text
				color={variant === 'outline' ? 'amber.400' : 'black'}
				fontFamily={'heading'}
				fontSize={'md'}
			>
				{title}
			</Text>
		</ButtonNativeBase>
	);
}
