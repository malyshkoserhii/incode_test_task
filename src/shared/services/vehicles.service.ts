import { Vehicle } from '../types';
import { HttpFactoryService } from './http-factory.service';
import { HttpService } from './http.service';

export class VehiclesService {
	constructor(private httpService: HttpService) {}

	private async getVehiclesInfo(id: string): Promise<Vehicle> {
		const response = await this.httpService.get<Vehicle>(`vehicles/${id}`);

		return response;
	}

	public async getVehicles(ids: Array<string>): Promise<Array<Vehicle>> {
		const promises = ids?.map((id) => this.getVehiclesInfo(id));

		return await Promise.all(promises);
	}
}

const factory = new HttpFactoryService();

export const vehiclesService = new VehiclesService(factory.createHttpService());
