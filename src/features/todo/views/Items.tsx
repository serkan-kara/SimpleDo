import { useEffect, useState } from "react";
import { deleteItem, getItems } from "../api";
import Navbar from "../components/Navbar";
import { IItem } from "../types/SampleInterface";
import ItemCard from "./ItemCard";

const Items = () => {
	const [items, setItems] = useState<IItem[]>([]);
	const [reload, setReload] = useState(true);

	const deleteHandler = (id: string) => {
		deleteItem(id).then((data) => {
			setReload(true);
			console.log("deleted: ", id, data);
		});
	};

	useEffect(() => {
		if (reload) {
			getItems().then((data) => {
				setItems(data);
				setReload(false);
			});
		}
	}, [reload]);

	if (items) {
		return (
			<>
				<div className='container p-6'>
					<Navbar />
					<figure className='text-center'>
						<blockquote className='blockquote'>
							<p>SIMPLEDO</p>
						</blockquote>
						<figcaption className='blockquote-footer'>
							Its famous and <cite title='Source Title'>Game Changer</cite>
						</figcaption>
					</figure>
					<div className='row'>
						{items.map((item) => {
							return <ItemCard key={item.id} item={item} deleteHandler={deleteHandler} />;
						})}
					</div>
				</div>
			</>
		);
	}
	return <div>Items page loading...</div>;
};

export default Items;
