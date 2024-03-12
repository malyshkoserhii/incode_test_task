import * as React from 'react';
import { Text } from 'react-native';

import { Skeleton } from '../../../../shared/components/skeleton';
import { Header } from '../../../../shared/components/header';
import { charactersService } from '../../../../shared/services/people.service';

export const HomeScreen = () => {
	React.useEffect(() => {
		const getCharacters = async () => {
			try {
				const people = await charactersService.getPeople(1);
				console.log('people: ', people);
				return people;
			} catch (error) {
				console.log('ERROR: ', error);
			}
		};

		getCharacters();
	}, []);

	return (
		<Skeleton>
			<Header title={'Star wars characters'} />
			<Text>Home Screen</Text>
		</Skeleton>
	);
};
