import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { Character } from '../shared/types';

export type CharactersStore = {
	characters: Array<Character>;
	setCharacters: (characters: Array<Character>) => void;
	isNexPage: boolean;
	setIsNextPage: (isNexPage: boolean) => void;
	isPreviousPage: boolean;
	setIsPreviousPage: (isPreviousPage: boolean) => void;
};

export const useChatactersStore = createWithEqualityFn<CharactersStore>(
	(set, get) => ({
		characters: [],
		setCharacters: (characters: Array<Character>) =>
			set(() => {
				const prevCharacters = get().characters;
				const updatedChatracters = [...prevCharacters].concat(
					characters,
				);

				return {
					characters: updatedChatracters,
				};
			}),
		isNexPage: false,
		setIsNextPage: (isNexPage: boolean) =>
			set(() => {
				return {
					isNexPage,
				};
			}),
		isPreviousPage: false,
		setIsPreviousPage: (isPreviousPage: boolean) =>
			set(() => {
				return {
					isPreviousPage,
				};
			}),
	}),
	shallow,
);
