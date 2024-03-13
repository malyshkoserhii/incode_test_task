import * as React from 'react';

import { Skeleton } from '../../../../shared/components/skeleton';
import { Header } from '../../../../shared/components/header';
import { useGetCharacters } from '../../hooks';
import { CharactersList } from '../../components/characters-list';
import { Loader } from '../../../../shared/components/loader';

export const HomeScreen = () => {
	const { characters, onEndReached, isInitialLoading, isPaginationLoading } =
		useGetCharacters();

	return (
		<Skeleton>
			<Header title="Star Wars Characters" />

			{isInitialLoading ? (
				<Loader />
			) : (
				<CharactersList
					charactes={characters}
					onEndReached={onEndReached}
					isPaginationLoading={isPaginationLoading}
				/>
			)}
		</Skeleton>
	);
};
