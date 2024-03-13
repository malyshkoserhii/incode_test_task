import { Starship } from '../types';
import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class StarshipService {
	constructor(private httpService: HttpService) {}

	private async getStarshipInfo(id: string): Promise<Starship> {
		const response = await this.httpService.get<Starship>(
			`starships/${id}`,
		);

		return response;
	}

	public async getStarships(ids: Array<string>): Promise<Array<Starship>> {
		const promises = ids?.map((id) => this.getStarshipInfo(id));

		return await Promise.all(promises);
	}
}

const factory = new HttpFactoryService();

export const starshipService = new StarshipService(factory.createHttpService());
