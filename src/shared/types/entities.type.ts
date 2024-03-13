export type Character = {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: Array<string>;
	species: Array<string>;
	vehicles: Array<string>;
	starships: Array<string>;
	created: string;
	edited: string;
	url: string;
};

export type Planet = {
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	residents: Array<string>;
	films: Array<string>;
	created: string;
	edited: string;
	url: string;
};

export type Film = {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: Array<string>;
	planets: Array<string>;
	starships: Array<string>;
	vehicles: Array<string>;
	species: Array<string>;
	created: string;
	edited: string;
	url: string;
};

export type Species = {
	name: string;
	classification: string;
	designation: string;
	average_height: string;
	skin_colors: string;
	hair_colors: string;
	eye_colors: string;
	average_lifespan: string;
	homeworld: string;
	language: string;
	people: Array<string>;
	films: Array<string>;
	created: string;
	edited: string;
	url: string;
};

export type Starship = {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	consumables: string;
	hyperdrive_rating: string;
	MGLT: string;
	starship_class: string;
	pilots: Array<string>;
	films: Array<string>;
	created: string;
	edited: string;
	url: string;
};

export type Vehicle = {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	consumables: string;
	vehicle_class: string;
	pilots: Array<string>;
	films: Array<string>;
	created: string;
	edited: string;
	url: string;
};
