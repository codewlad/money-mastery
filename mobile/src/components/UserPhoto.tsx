import { Image, IImageProps, Center, useTheme } from 'native-base';

import { FontAwesome } from '@expo/vector-icons';

import { UserDTO } from '@dtos/UserDTO';

type Props = IImageProps & {
	size: number;
	user: UserDTO;
};

export function UserPhoto({ user, size, ...rest }: Props) {
	const { colors } = useTheme();

	return (
		<Center>
			{user.avatar ? (
				<Image
					w={size}
					h={size}
					rounded={'full'}
					borderWidth={1}
					borderColor={'gray.900'}
					{...rest}
				/>
			) : (
				<Center
					bg={'gray.900'}
					rounded={'full'}
				>
					<FontAwesome
						name='user-circle-o'
						size={52}
						color={colors.gray[500]}
					/>
				</Center>
			)}
		</Center>
	);
}
