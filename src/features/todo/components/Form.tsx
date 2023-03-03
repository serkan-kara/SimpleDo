import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem, updateItem } from "../api";
import { IItem } from "../types/SampleInterface";

interface IItemFormProps {
	process?: "update" | "create";
	item?: IItem;
}

const ItemForm: React.FC<IItemFormProps> = ({ item, process = "create" }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		if (item) {
			setTitle(item?.title!);
			setDescription(item?.description!);
		}
	}, [item]);

	const createOrUpdateItem = (e: any) => {
		e.preventDefault();
		if (item && process === "update") {
			updateItem(item?.id?.toString()!, { title, description }).then((data) => {
				console.log("updated");
				navigate("/todo/items");
			});
		} else {
			createItem({ title, description }).then((data) => {
				console.log("created");
				navigate("/todo/items");
			});
		}
	};

	return (
		<form onSubmit={createOrUpdateItem}>
			<div className='form-outline mb-4'>
				<input
					type='text'
					id='form4Example1'
					className='form-control'
					placeholder='Title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>

			<div className='form-outline mb-4'>
				<textarea
					className='form-control'
					id='form4Example3'
					rows={4}
					placeholder='Description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
			</div>
			<button type='submit' className='btn btn-primary btn-block mb-4'>
				{process === "create" ? "Create Todo" : "Update Todo"}
			</button>
		</form>
	);
};

export default ItemForm;
