import { Planet } from '../types';
import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class PlanetService {
	constructor(private httpService: HttpService) {}

	public async getPlanetInfo(id: string): Promise<Planet> {
		const response = await this.httpService.get<Planet>(`planets/${id}`);
		return response;
	}
}

const factory = new HttpFactoryService();

export const planetService = new PlanetService(factory.createHttpService());
