import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import { Character } from '../shared/types';
import { asyncStorage } from '../shared/services';
import { STORAGE_KEYS } from '../shared/constants';
import {
	addGenderUtil,
	removeGenderUtil,
} from '../shared/utils/get-hender-info.util';

export type GenderInfo = {
	male: number;
	female: number;
	others: number;
};

export type CharactersStore = {
	characters: Array<Character>;
	setCharacters: (characters: Array<Character>) => void;
	isNexPage: boolean;
	setIsNextPage: (isNexPage: boolean) => void;
	isPreviousPage: boolean;
	setIsPreviousPage: (isPreviousPage: boolean) => void;
	genderInfo: GenderInfo;
	initGenderInfo: (genderInfo: GenderInfo) => void;
	addGender: (favorite: string) => void;
	removeGender: (favorite: string) => void;
	resetGenderInfo: () => void;
	favorites: Array<string>;
	initFavorites: (favorites: Array<string>) => void;
	toggleFavorite: (favorite: string) => void;
	addFavorite: (favorite: string) => void;
	removeFavorite: (favoriteToRemove: string) => void;
	resetFavorites: () => void;
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
		genderInfo: {
			male: 0,
			female: 0,
			others: 0,
		},
		initGenderInfo: (genderInfo: GenderInfo) =>
			set(() => {
				return {
					genderInfo,
				};
			}),
		addGender: (favorite: string) =>
			set(() => {
				const characters = get().characters;
				const genderInfo = get().genderInfo;
				const updatedGenderInfo = addGenderUtil(
					characters,
					genderInfo,
					favorite,
				);

				asyncStorage.setStringifiedData<GenderInfo>(
					STORAGE_KEYS.GENDER_INFO,
					updatedGenderInfo,
				);

				return {
					genderInfo: {
						...updatedGenderInfo,
					},
				};
			}),
		removeGender: (favorite: string) =>
			set(() => {
				const characters = get().characters;
				const genderInfo = get().genderInfo;
				const updatedGenderInfo = removeGenderUtil(
					characters,
					genderInfo,
					favorite,
				);

				asyncStorage.setStringifiedData<GenderInfo>(
					STORAGE_KEYS.GENDER_INFO,
					updatedGenderInfo,
				);

				return {
					genderInfo: {
						...updatedGenderInfo,
					},
				};
			}),
		resetGenderInfo: () =>
			set(() => {
				asyncStorage.removeData(STORAGE_KEYS.GENDER_INFO);
				return {
					genderInfo: {
						male: 0,
						female: 0,
						others: 0,
					},
				};
			}),
		favorites: [],
		initFavorites: (favorites: Array<string>) =>
			set(() => {
				return {
					favorites,
				};
			}),
		toggleFavorite: (favorite: string) =>
			set(() => {
				const favorites = get().favorites;
				const addFavorite = get().addFavorite;
				const removeFavorite = get().removeFavorite;
				const isFavorite = favorites.includes(favorite);
				const addGender = get().addGender;
				const removeGender = get().removeGender;

				if (isFavorite) {
					removeFavorite(favorite);
					removeGender(favorite);
					return {};
				}

				addGender(favorite);
				addFavorite(favorite);

				return {};
			}),
		addFavorite: (favorite: string) =>
			set(() => {
				const favorites = get().favorites;
				const updatedFavorites = [...favorites, favorite];

				asyncStorage.setStringifiedData<Array<string>>(
					STORAGE_KEYS.FAVORITES,
					updatedFavorites,
				);

				return {
					favorites: updatedFavorites,
				};
			}),
		removeFavorite: (favoriteToRemove: string) =>
			set(() => {
				const favorites = get().favorites;
				const updatedFavorites = favorites?.filter(
					(item) => item !== favoriteToRemove,
				);

				asyncStorage.setStringifiedData<Array<string>>(
					STORAGE_KEYS.FAVORITES,
					updatedFavorites,
				);

				return {
					favorites: updatedFavorites,
				};
			}),
		resetFavorites: async () =>
			set(() => {
				asyncStorage.removeData(STORAGE_KEYS.FAVORITES);
				return {
					favorites: [],
				};
			}),
	}),
	shallow,
);
