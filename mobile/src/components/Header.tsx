import { HStack, VStack, Text, useTheme, Center } from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { UserDTO } from '@dtos/UserDTO';

import { UserPhoto } from '@components/UserPhoto';

type Props =
	| {
			user: UserDTO;
			variant: 'home';
			title: null;
	  }
	| {
			user: UserDTO;
			variant: 'default';
			title: string;
	  };

export function Header({ user, variant, title }: Props) {
	const { colors } = useTheme();

	return (
		<Center
			bg={'transparent.black.95'}
			w={'full'}
			h={32}
			justifyContent={'flex-end'}
			px={5}
			pb={3}
		>
			<HStack
				alignItems={'center'}
				justifyContent={'space-between'}
				w={'full'}
				h={13}
			>
				{variant === 'home' ? (
					<HStack>
						<UserPhoto
							user={user}
							source={{ uri: `` }}
							size={52}
							alt='Foto do usuário'
						/>
						<VStack ml={5}>
							<Text
								color={'white'}
								fontSize={'md'}
								fontFamily={'heading'}
							>
								Olá,
							</Text>
							<Text
								color={'white'}
								fontSize={'xl'}
								fontFamily={'heading'}
							>
								Wlad
							</Text>
						</VStack>
					</HStack>
				) : (
					<>
						<MaterialCommunityIcons
							name='arrow-left-circle-outline'
							size={20}
							color={colors.gray[500]}
						/>
						<Text
							color={'white'}
							fontSize={'xl'}
							fontFamily={'heading'}
						>
							{title}
						</Text>
					</>
				)}
				<MaterialIcons
					name='logout'
					size={20}
					color={colors.gray[500]}
				/>
			</HStack>
		</Center>
	);
}
