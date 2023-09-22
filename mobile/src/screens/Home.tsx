import { Text, View } from 'react-native';

export function Home() {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#000',
			}}
		>
			<Text style={{ color: '#FFF', fontSize: 32, fontWeight: 'bold' }}>
				Home
			</Text>
		</View>
	);
}
