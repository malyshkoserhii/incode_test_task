import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageService {
	public async getData(key: string) {
		try {
			const value = await AsyncStorage.getItem(key);

			if (value !== null) {
				return value;
			}
		} catch (e) {
			this.getErrorMessage(e);
		}
	}

	public async setData(key: string, value: string) {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (e) {
			this.getErrorMessage(e);
		}
	}

	public async removeData(key: string) {
		try {
			await AsyncStorage.removeItem(key);
		} catch (e) {
			this.getErrorMessage(e);
		}
	}

	private getErrorMessage(error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
		console.error(error);
	}
}

export const asyncStorage = new AsyncStorageService();
