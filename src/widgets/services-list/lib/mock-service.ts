import type { Service } from "../../../entities/service";

export const MOCK_SERVICE: Service[] = [
	{
		id: 1,
		name: "Дополнительный багаж",
		price: 2000,
		description: "Покупая данную опцию, вы повышаете лимит своего багажа на 10 кг. Отлично подходит для тех, кто успел хорошо закупиться!",
		icon: "bag",
	},
	{
		id: 2,
		name: "Трансфер из аэропорта",
		price: 5000,
		description: "При прилёте вас встретит комфортный автомобиль бизнес класса.",
		icon: "car",
	},
	{
		id: 3,
		name: "Интернет на борту",
		price: 1000,
		description: "При перелёте, вы сможете неограниченное количество времени пользоваться интернетом.",
		icon: "wifi",
	},
	{
		id: 4,
		name: "Дополнительнок питание",
		price: 1500,
		description: "В полёте вам будет предложено дополнительное питание",
		icon: "food",
	},
] as const;

export const MOCK_SERVICE_MAP = MOCK_SERVICE.reduce((acc, service) => {
	acc[service.id] = service;
	return acc;
}, {} as Record<number, Service>);
