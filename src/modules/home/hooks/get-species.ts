import * as React from 'react';

import { Character } from 'shared/types';
import { useCharacterInfoState } from '../../../shared/selectors/character-info-state.hook';
import { getIds } from '../../../shared/utils';
import { speciesService } from '../../../shared/services/species.service';

type UseGetSpecies = {
	character: Character;
};

export const useGetSpecies = ({ character }: UseGetSpecies) => {
	const { species, setSpecies } = useCharacterInfoState();

	React.useEffect(() => {
		const speciesIds = getIds(character?.films);

		const getSpecies = async () => {
			try {
				const data = await speciesService.getSpecies(speciesIds);
				const species = data?.map((item) => item?.name);
				setSpecies(species);
			} catch (error) {}
		};

		getSpecies();
	}, []);

	return {
		species,
	};
};
