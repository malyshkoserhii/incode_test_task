import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class SpeciesService {
	constructor(private httpService: HttpService) {}

	public async getSpecies(page: number) {
		const species = await this.httpService.get(`species/?page=${page}`);

		return species;
	}
}

const factory = new HttpFactoryService();

export const charactersService = new SpeciesService(
	factory.createHttpService(),
);
