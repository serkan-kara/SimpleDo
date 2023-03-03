import SampleInterface, { IItem } from "./types/SampleInterface";

export const getSampleData = (): Promise<SampleInterface[]> =>
	fetch("/sample-data", { method: "GET" }).then((res) => res.json());

// Please put your api call functions here.

// get items
export const getItems = (): Promise<IItem[]> => {
	return fetch("/items", { method: "GET" })
		.then((res) => res.json())
		.then((data) => data.data as IItem[])
		.catch((err) => {
			console.log("error: ", err);
			return [];
		});
};

// get item by id
export const getItemById = (id: string): Promise<IItem> => {
	return fetch(`/items/${id}`, { method: "GET" })
		.then((res) => res.json())
		.then((data) => data.data as IItem)
		.catch((err) => {
			console.log("error: ", err);
			return {};
		});
};

// update item
export const updateItem = (id: string, item: IItem): Promise<IItem> => {
	return fetch(`/items/${id}`, {
		method: "PATCH",
		body: JSON.stringify({
			title: item.title,
			description: item.description,
		}),
	})
		.then((res) => res.json())
		.then((data) => data.data as IItem)
		.catch((err) => {
			console.log("error: ", err);
			return {};
		});
};

// create item
export const createItem = (item: IItem): Promise<IItem> => {
	return fetch(`/items`, {
		method: "POST",
		body: JSON.stringify({
			title: item.title,
			description: item.description,
		}),
	})
		.then((res) => res.json())
		.then((data) => data.data as IItem)
		.catch((err) => {
			console.log("error: ", err);
			return {};
		});
};

// delete item
export const deleteItem = (id: string): Promise<boolean> => {
	return fetch(`/items/${id}`, { method: "DELETE" })
		.then((res) => res.json())
		.then((data) => data.data as boolean)
		.catch((err) => {
			console.log("error: ", err);
			return false;
		});
};
