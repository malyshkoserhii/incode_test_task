import * as React from 'react';

import { useCharactersState } from '../../../shared/selectors';
import { asyncStorage } from '../../../shared/services';
import { STORAGE_KEYS } from '../../../shared/constants';
import { GenderInfo } from '../../../store';

export const useInitGenderInfo = () => {
	const { initGenderInfo, resetGenderInfo } = useCharactersState();

	React.useEffect(() => {
		const getGenderInfo = async () => {
			const savedFavorites = await asyncStorage.getParsedData<GenderInfo>(
				STORAGE_KEYS.GENDER_INFO,
			);

			const genderInfo: GenderInfo = {
				male: Number(savedFavorites?.male),
				female: Number(savedFavorites?.female),
				others: Number(savedFavorites?.others),
			};

			savedFavorites ? initGenderInfo(genderInfo) : resetGenderInfo();
		};

		getGenderInfo();
	}, []);
};
