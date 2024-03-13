import * as React from 'react';

import { Character } from 'shared/types';
import { useCharacterInfoState } from '../../../shared/selectors/character-info-state.hook';
import { getIds } from '../../../shared/utils';
import { filmService } from '../../../shared/services/film.service';

type UseGetFilms = {
	character: Character;
};

export const useGetFilms = ({ character }: UseGetFilms) => {
	const { films, setFilms } = useCharacterInfoState();

	React.useEffect(() => {
		const filmsIds = getIds(character?.films);

		const getFilms = async () => {
			try {
				const data = await filmService.getFilms(filmsIds);
				const films = data?.map((film) => film?.title);
				setFilms(films);
			} catch (error) {}
		};

		getFilms();
	}, []);

	return {
		films,
	};
};
