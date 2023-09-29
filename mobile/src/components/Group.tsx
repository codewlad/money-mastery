import { Text, Pressable, IPressableProps } from 'native-base';

type Props = IPressableProps & {
	name: string;
	isActive?: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
	return (
		<Pressable
			mr={2}
			w={24}
			h={8}
			bg={'gray.900'}
			borderColor={'gray.500'}
			borderWidth={1}
			rounded={8}
			justifyContent={'center'}
			alignItems={'center'}
			overflow={'hidden'}
			isPressed={isActive}
			_pressed={{
				borderColor: 'amber.400',
			}}
			{...rest}
		>
			<Text
				color={isActive ? 'amber.400' : 'white'}
				textTransform={'uppercase'}
				fontSize={'xs'}
			>
				{name}
			</Text>
		</Pressable>
	);
}
