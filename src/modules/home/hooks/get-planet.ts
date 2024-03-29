import * as React from 'react';

import { Character } from 'shared/types';
import { useCharacterInfoState } from '../../../shared/selectors';
import { getEntityId } from '../../../shared/utils';
import { planetService } from '../../../shared/services';

type UseGetPlanet = {
	character: Character;
};

export const useGetPlanet = ({ character }: UseGetPlanet) => {
	const { homeword, setHomeword } = useCharacterInfoState();

	React.useEffect(() => {
		const planetId = getEntityId(character?.homeworld);

		const getPlanet = async () => {
			try {
				const data = await planetService.getPlanetInfo(planetId);
				setHomeword(data?.name);
			} catch (error) {}
		};

		getPlanet();
	}, []);

	return {
		homeword,
	};
};
