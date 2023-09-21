import { Center, Spinner } from 'native-base';

export function Loading() {
	return (
		<Center
			flex={1}
			bg={'black'}
		>
			<Spinner color={'amber.400'} />
		</Center>
	);
}
