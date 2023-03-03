interface SampleInterface {
	id: number;
	name: string;
	createdAt: Date;
}

export interface IItem {
	id?: number;
	title?: string;
	description?: string;
	createdAt?: string;
}

export interface IResponse {
	data: IItem[];
}

export default SampleInterface;
