import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import { asyncStorage } from '../shared/services';
import { STORAGE_KEYS } from '../shared/constants';

export type CharactersInfoStore = {
	homeword: string;
	setHomeword: (homeword: string) => void;
	films: Array<string>;
	setFilms: (films: Array<string>) => void;
	species: Array<string>;
	setSpecies: (species: Array<string>) => void;
	vehicles: Array<string>;
	setVehicels: (species: Array<string>) => void;
	starships: Array<string>;
	setStarships: (species: Array<string>) => void;
	favorites: Array<string>;
	initFavorites: (favorites: Array<string>) => void;
	toggleFavorite: (favorite: string) => void;
	addFavorite: (favorite: string) => void;
	removeFavorite: (favoriteToRemove: string) => void;
	resetFavorites: () => void;
};

export const useChatactersInfoStore = createWithEqualityFn<CharactersInfoStore>(
	(set, get) => ({
		homeword: '',
		setHomeword: (homeword: string) =>
			set(() => {
				return {
					homeword,
				};
			}),
		films: [],
		setFilms: (films: Array<string>) =>
			set(() => {
				return {
					films,
				};
			}),

		species: [],
		setSpecies: (species: Array<string>) =>
			set(() => {
				return {
					species,
				};
			}),
		vehicles: [],
		setVehicels: (vehicles: Array<string>) =>
			set(() => {
				return {
					vehicles,
				};
			}),
		starships: [],
		setStarships: (starships: Array<string>) =>
			set(() => {
				return {
					starships,
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

				if (isFavorite) {
					removeFavorite(favorite);
					return {};
				}

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
