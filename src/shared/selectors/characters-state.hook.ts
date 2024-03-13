import { useChatactersStore } from '../../../src/store';

export const useCharactersState = () => {
	const [
		characters,
		setCharacters,
		isNexPage,
		setIsNextPage,
		isPreviousPage,
		setIsPreviousPage,
	] = useChatactersStore((state) => [
		state.characters,
		state.setCharacters,
		state.isNexPage,
		state.setIsNextPage,
		state.isPreviousPage,
		state.setIsPreviousPage,
	]);

	const clearCharactersState = () => {
		setCharacters([]);
		setIsNextPage(false);
		setIsNextPage(false);
	};

	return {
		clearCharactersState,
		characters,
		setCharacters,
		isNexPage,
		setIsNextPage,
		isPreviousPage,
		setIsPreviousPage,
	};
};
