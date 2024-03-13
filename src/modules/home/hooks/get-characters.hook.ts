import * as React from 'react';

import { charactersService } from '../../../shared/services';
import { useCharactersState } from '../../../shared/selectors';

export const useGetCharacters = () => {
	const [initialLoading, setInitialLoading] = React.useState(false);
	const [paginationLoading, setPaginationLoading] = React.useState(false);

	const { characters, setCharacters, setIsPreviousPage, setIsNextPage } =
		useCharactersState();

	React.useEffect(() => {
		const getCharacters = async () => {
			try {
				setInitialLoading(true);
				const data = await charactersService.getCharacters(1);

				setCharacters(data?.results);
				setIsNextPage(Boolean(data?.next));
				setIsPreviousPage(Boolean(data?.previous));

				return data;
			} catch (error) {
				setInitialLoading(false);
			} finally {
				setInitialLoading(false);
			}
		};

		getCharacters();
	}, []);

	return {
		characters,
	};
};
