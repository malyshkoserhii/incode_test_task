import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class PeopleService {
	constructor(private httpService: HttpService) {}

	public async getPeople(page: number) {
		const people = await this.httpService.get(`people/?page=${page}`);

		return people;
	}
}

const factory = new HttpFactoryService();

export const charactersService = new PeopleService(factory.createHttpService());
