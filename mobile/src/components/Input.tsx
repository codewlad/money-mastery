import { Input as NativeBaseInput } from 'native-base';

export function Input({ ...rest }) {
	return (
		<NativeBaseInput
			bg={'gray.900'}
			h={34}
			px={2}
			borderWidth={1}
			borderColor={'gray.500'}
			rounded={8}
			fontSize={'xs'}
			color={'white'}
			fontFamily={'body'}
			placeholderTextColor={'gray.500'}
			alignItems={'center'}
			_focus={{
				borderColor: 'amber.400',
				bg: 'gray.900',
				cursorColor: 'white',
			}}
			{...rest}
		/>
	);
}
