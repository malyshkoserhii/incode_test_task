import { Species } from '../types';
import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class SpeciesService {
	constructor(private httpService: HttpService) {}

	private async getSpeciesInfo(id: string): Promise<Species> {
		const response = await this.httpService.get<Species>(`species/${id}`);

		return response;
	}

	public async getSpecies(ids: Array<string>): Promise<Array<Species>> {
		const promises = ids?.map((id) => this.getSpeciesInfo(id));

		return await Promise.all(promises);
	}
}

const factory = new HttpFactoryService();

export const speciesService = new SpeciesService(factory.createHttpService());
