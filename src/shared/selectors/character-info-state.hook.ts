import { useChatactersInfoStore } from '../../store';

export const useCharacterInfoState = () => {
	const [
		homeword,
		setHomeword,
		films,
		setFilms,
		species,
		setSpecies,
		vehicles,
		setVehicels,
		starships,
		setStarships,
	] = useChatactersInfoStore((state) => [
		state.homeword,
		state.setHomeword,
		state.films,
		state.setFilms,
		state.species,
		state.setSpecies,
		state.vehicles,
		state.setVehicels,
		state.starships,
		state.setStarships,
	]);

	const clearCharacterInfoState = () => {
		setHomeword('');
		setFilms([]);
		setSpecies([]);
		setVehicels([]);
		setStarships([]);
	};

	return {
		clearCharacterInfoState,
		homeword,
		setHomeword,
		films,
		setFilms,
		species,
		setSpecies,
		vehicles,
		setVehicels,
		starships,
		setStarships,
	};
};
