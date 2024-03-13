import * as React from 'react';

import { Character } from 'shared/types';
import { useCharacterInfoState } from '../../../shared/selectors';
import { getIds } from '../../../shared/utils';
import { vehiclesService } from '../../../shared/services';

type UseGetVehicles = {
	character: Character;
};

export const useGetVehicles = ({ character }: UseGetVehicles) => {
	const { vehicles, setVehicels } = useCharacterInfoState();

	React.useEffect(() => {
		const vehiclesIds = getIds(character?.vehicles);

		const getVehicles = async () => {
			try {
				const data = await vehiclesService.getVehicles(vehiclesIds);
				const vehicles = data?.map((vehicle) => vehicle?.name);
				setVehicels(vehicles);
			} catch (error) {}
		};

		getVehicles();
	}, []);

	return {
		vehicles,
	};
};
