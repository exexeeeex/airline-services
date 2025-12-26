import { MOCK_SERVICE } from "./mock-service";

export const useServices = () => {
	const services = MOCK_SERVICE.length >= 1 ? MOCK_SERVICE : [];

	return {
		services,
	};
};
