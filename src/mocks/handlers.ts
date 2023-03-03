import { rest } from "msw";

interface Item {
	id: number;
	title: string;
	description: string;
	createdAt: string;
}

interface ResponseBody<T> {
	data: T;
}

let itemIdCount = 0;
const items: Item[] = [
	{
		id: 1,
		title: "item 1",
		description: "item 1 description",
		createdAt: new Date().toISOString(),
	},
	{
		id: 2,
		title: "item 2",
		description: "item 2 description",
		createdAt: new Date().toISOString(),
	},
];

const handlers = [
	// create item
	rest.post<Omit<Item, "id" | "createdAt">, {}, ResponseBody<Item>>(`/items`, async (req, res, context) => {
		const item: Item = {
			...(await req.json()),
			id: ++itemIdCount,
			createdAt: new Date().toISOString(),
		};
		items.push(item);
		return res(context.json({ data: item }));
	}),
	// delete item by id
	rest.delete<undefined, { itemId: string }, ResponseBody<boolean>>(`/items/:itemId`, (req, res, context) => {
		const index = items.findIndex((item) => item.id === +req.params.itemId);
		if (index !== -1) {
			items.splice(index, 1);
		}
		return res(context.json({ data: index !== -1 }));
	}),
	// get items
	rest.get<undefined, {}, ResponseBody<Item[]>>(`/items`, (req, res, context) => {
		return res(context.json({ data: items }));
	}),
	// get item by id
	rest.get<undefined, { itemId: string }, ResponseBody<Item | null>>(`/items/:itemId`, (req, res, context) => {
		const item = items.find((item) => item.id === +req.params.itemId);
		return res(context.json({ data: item ?? null }));
	}),
	// update item by id
	rest.patch<Omit<Item, "id" | "createdAt">, { itemId: string }, ResponseBody<Item | null>>(
		`/items/:itemId`,
		async (req, res, context) => {
			const item = items.find((item) => item.id === +req.params.itemId);
			if (item) {
				Object.assign(item, await req.json());
			}
			return res(context.json({ data: item ?? null }));
		}
	),
];

export { handlers };
