import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

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
	}),
	shallow,
);
