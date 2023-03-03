import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "../../../assets/images/cat.jpg";
import { getItemById } from "../api";
import Navbar from "../components/Navbar";
import { parseDate } from "../helpers";
import { IItem } from "../types/SampleInterface";

const ItemDetail = () => {
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
		<>
			<Navbar />
			<div className='container'>
				<div className='card w-100' style={{ width: "18rem" }}>
					<img src={Image} className='card-img-top' alt='...' />
					<div className='card-body'>
						<h5 className='card-title'>{item.title}</h5>
						<p className='card-text'>{item.description}</p>
						<p className='card-text'>
							<small className='text-muted'>{parseDate(item.createdAt!)}</small>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
