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
		favorites,
		initFavorites,
		addFavorite,
		removeFavorite,
		toggleFavorite,
		resetFavorites,
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
		state.favorites,
		state.initFavorites,
		state.addFavorite,
		state.removeFavorite,
		state.toggleFavorite,
		state.resetFavorites,
	]);

	const clearCharacterInfoState = () => {
		setHomeword('');
		setFilms([]);
		setSpecies([]);
		setVehicels([]);
		setStarships([]);
		resetFavorites();
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
		favorites,
		initFavorites,
		addFavorite,
		removeFavorite,
		toggleFavorite,
		resetFavorites,
	};
};
