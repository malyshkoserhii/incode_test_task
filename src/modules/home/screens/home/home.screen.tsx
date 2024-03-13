import * as React from 'react';
import { Text } from 'react-native';

import { Skeleton } from '../../../../shared/components/skeleton';
import { Header } from '../../../../shared/components/header';
import { useGetCharacters } from '../../hooks';

export const HomeScreen = () => {
	const { characters } = useGetCharacters();

	return (
		<Skeleton>
			<Header title="Star wars characters" />
			<Text>Home Screen</Text>
		</Skeleton>
	);
};
