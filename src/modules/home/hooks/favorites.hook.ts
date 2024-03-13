import * as React from 'react';

import { useCharacterInfoState } from '../../../shared/selectors';
import { asyncStorage } from '../../../shared/services';
import { STORAGE_KEYS } from '../../../shared/constants';

export const useFavorites = () => {
	const { favorites, toggleFavorite, initFavorites } =
		useCharacterInfoState();

	React.useEffect(() => {
		const getFavorites = async () => {
			const savedFavorites = await asyncStorage.getParsedData<
				Array<string>
			>(STORAGE_KEYS.FAVORITES);

			savedFavorites ? initFavorites(savedFavorites) : initFavorites([]);
		};

		getFavorites();
	}, []);

	const isFavorite = (characterName: string) => {
		return favorites.includes(characterName);
	};

	return {
		favorites,
		toggleFavorite,
		isFavorite,
	};
};
