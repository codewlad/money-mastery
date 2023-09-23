import {
	Input as NativeBaseInput,
	IInputProps,
	FormControl,
} from 'native-base';

type Props = IInputProps & {
	errorMessage?: string | null;
};

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
	const invalid = !!errorMessage || isInvalid;

	return (
		<FormControl
			isInvalid={invalid}
			mb={4}
		>
			<NativeBaseInput
				w={'full'}
				bg={'gray.900'}
				h={10}
				px={4}
				borderWidth={0}
				rounded={8}
				fontSize={'md'}
				color={'white'}
				fontFamily={'body'}
				placeholderTextColor={'gray.500'}
				isInvalid={invalid}
				_invalid={{
					borderWidth: 1,
					borderColor: 'red.900',
				}}
				_focus={{
					borderWidth: 1,
					borderColor: 'amber.400',
					bg: 'gray.900',
					cursorColor: 'white',
				}}
				{...rest}
			/>
			<FormControl.ErrorMessage _text={{ color: 'red.900' }}>
				{errorMessage}
			</FormControl.ErrorMessage>
		</FormControl>
	);
}
