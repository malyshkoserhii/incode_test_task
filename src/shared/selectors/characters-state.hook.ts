import { useChatactersStore } from '../../../src/store';

export const useCharactersState = () => {
	const [
		characters,
		setCharacters,
		isNexPage,
		setIsNextPage,
		isPreviousPage,
		setIsPreviousPage,
		genderInfo,
		initGenderInfo,
		addGender,
		removeGender,
		resetGenderInfo,
		favorites,
		initFavorites,
		addFavorite,
		removeFavorite,
		toggleFavorite,
		resetFavorites,
	] = useChatactersStore((state) => [
		state.characters,
		state.setCharacters,
		state.isNexPage,
		state.setIsNextPage,
		state.isPreviousPage,
		state.setIsPreviousPage,
		state.genderInfo,
		state.initGenderInfo,
		state.addGender,
		state.removeGender,
		state.resetGenderInfo,
		state.favorites,
		state.initFavorites,
		state.addFavorite,
		state.removeFavorite,
		state.toggleFavorite,
		state.resetFavorites,
	]);

	const clearCharactersState = () => {
		setCharacters([]);
		setIsNextPage(false);
		setIsNextPage(false);
		resetFavorites();
		resetGenderInfo();
	};

	return {
		clearCharactersState,
		characters,
		setCharacters,
		isNexPage,
		setIsNextPage,
		isPreviousPage,
		setIsPreviousPage,
		genderInfo,
		initGenderInfo,
		addGender,
		removeGender,
		resetGenderInfo,
		favorites,
		initFavorites,
		addFavorite,
		removeFavorite,
		toggleFavorite,
		resetFavorites,
	};
};
