export interface Service {
	id: number;
	name: string;
	price: number;
	description: string;
	icon: ServiceIconType;
}

export type ServiceIconType = "bag" | "car" | "wifi" | "food";
