import * as React from 'react';

import { Character } from 'shared/types';
import { useCharacterInfoState } from '../../../shared/selectors';
import { getIds } from '../../../shared/utils';
import { starshipService } from '../../../shared/services';

type UseGetStarships = {
	character: Character;
};

export const useGetStarships = ({ character }: UseGetStarships) => {
	const { starships, setStarships } = useCharacterInfoState();

	React.useEffect(() => {
		const speciesIds = getIds(character?.starships);

		const getStarships = async () => {
			try {
				const data = await starshipService.getStarships(speciesIds);
				const starshipNames = data?.map((starship) => starship?.name);
				setStarships(starshipNames);
			} catch (error) {}
		};

		getStarships();
	}, []);

	return {
		starships,
	};
};
