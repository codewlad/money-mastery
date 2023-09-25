import { useNavigation } from '@react-navigation/native';
import { Center, HStack, Image, ScrollView, Text, VStack } from 'native-base';

import BackgroundImg from '@assets/background.png';
import LogoImg from '@assets/coin.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp() {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsVerticalScrollIndicator={false}
		>
			<Image
				source={BackgroundImg}
				defaultSource={BackgroundImg}
				alt='Gráfico de linha'
				resizeMode='contain'
				position={'absolute'}
				opacity={50}
				mt={5}
			/>

			<VStack
				my={12}
				flex={1}
				alignItems={'center'}
				justifyContent={'space-between'}
			>
				<Center>
					<HStack alignItems={'center'}>
						<Image
							source={LogoImg}
							alt='Icone de moedas'
							mr={2}
						/>
						<Text
							color={'amber.400'}
							fontSize={32}
							fontFamily={'heading'}
						>
							Money Mastery
						</Text>
					</HStack>
					<Text
						color={'white'}
						fontSize={16}
						fontFamily={'body'}
					>
						Você no Controle do seu Dinheiro
					</Text>
				</Center>

				<Center
					width={'full'}
					px={16}
					my={16}
				>
					<Text
						fontSize={'md'}
						color={'white'}
						fontFamily={'heading'}
						textAlign={'center'}
						mb={10}
					>
						Crie sua conta
					</Text>
					<Input placeholder='Nome' />
					<Input
						placeholder='E-mail'
						keyboardType='email-address'
						autoCapitalize='none'
					/>
					<Input
						placeholder='Senha'
						secureTextEntry
					/>
					<Input
						placeholder='Confirme a senha'
						secureTextEntry
					/>
					<Button title='Criar e acessar' />
				</Center>

				<Center
					w={'full'}
					px={16}
				>
					<Button
						title='Voltar para o login'
						variant={'outline'}
						onPress={handleGoBack}
					/>
				</Center>
			</VStack>
		</ScrollView>
	);
}
