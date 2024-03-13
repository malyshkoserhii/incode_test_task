import * as React from 'react';

import { charactersService } from '../../../shared/services';
import { useCharactersState } from '../../../shared/selectors';
import { Character, PaginatedResponse } from '../../../shared/types';

export const useGetCharacters = () => {
	const [isInitialLoading, setIsInitialLoading] = React.useState(false);
	const [isPaginationLoading, setIsPaginationLoading] = React.useState(false);
	const [page, setPage] = React.useState(2);

	const {
		characters,
		isNexPage,
		setCharacters,
		setIsPreviousPage,
		setIsNextPage,
	} = useCharactersState();

	React.useEffect(() => {
		const getCharacters = async () => {
			try {
				setIsInitialLoading(true);
				const data = await charactersService.getCharacters(1);
				populdateState(data);
			} catch (error) {
				setIsInitialLoading(false);
			} finally {
				setIsInitialLoading(false);
			}
		};

		getCharacters();
	}, []);

	const populdateState = (data: PaginatedResponse<Character>) => {
		setCharacters(data?.results);
		setIsNextPage(Boolean(data?.next));
		setIsPreviousPage(Boolean(data?.previous));
	};

	const onEndReached = async () => {
		try {
			if (!isNexPage) {
				return;
			}
			setPage((prev) => prev + 1);
			setIsPaginationLoading(true);
			const data = await charactersService.getCharacters(page);
			populdateState(data);
		} catch (error) {
			setIsPaginationLoading(false);
		} finally {
			setIsPaginationLoading(false);
		}
	};

	return {
		characters,
		isInitialLoading,
		isPaginationLoading,
		onEndReached,
	};
};
