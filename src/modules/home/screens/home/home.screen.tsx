import * as React from 'react';
import { Text } from 'react-native';

import { Skeleton } from '../../../../shared/components/skeleton';
import { Header } from '../../../../shared/components/header';

export const HomeScreen = () => {
	return (
		<Skeleton>
			<Header title={'Star wars characters'} />
			<Text>Home Screen</Text>
		</Skeleton>
	);
};
