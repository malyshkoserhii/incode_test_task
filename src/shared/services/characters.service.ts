import { PaginatedResponse, Person } from '../types';
import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class CharactersService {
	constructor(private httpService: HttpService) {}

	public async getCharacters(
		page: number,
	): Promise<PaginatedResponse<Person>> {
		const response = await this.httpService.get<PaginatedResponse<Person>>(
			`people/?page=${page}`,
		);

		return response;
	}
}

const factory = new HttpFactoryService();

export const charactersService = new CharactersService(
	factory.createHttpService(),
);
