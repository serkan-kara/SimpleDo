import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../api";
import ItemForm from "../components/Form";
import Navbar from "../components/Navbar";
import { IItem } from "../types/SampleInterface";

const UpdateItem = () => {
	const { id } = useParams();

	const [item, setItem] = useState<IItem>({});

	useEffect(() => {
		if (id) {
			getItemById(id).then((data) => {
				setItem(data);
			});
		}
	}, [id]);
	return (
		<div className='container'>
			<Navbar />
			<figure className='text-center'>
				<blockquote className='blockquote'>
					<p>SIMPLEDO</p>
				</blockquote>
				<figcaption className='blockquote-footer'>
					Create new Todo and <cite title='Source Title'>Get Ready</cite>
				</figcaption>
			</figure>
			<ItemForm item={item} process='update' />
		</div>
	);
};

export default UpdateItem;
