import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { Person } from '../shared/types';

export type CharactersStore = {
	characters: Array<Person>;
	setCharacters: (characters: Array<Person>) => void;
	isNexPage: boolean;
	setIsNextPage: (isNexPage: boolean) => void;
	isPreviousPage: boolean;
	setIsPreviousPage: (isPreviousPage: boolean) => void;
};

export const useChatactersStore = createWithEqualityFn<CharactersStore>(
	(set, get) => ({
		characters: [],
		setCharacters: (characters: Array<Person>) =>
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
