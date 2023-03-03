import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { parseDate } from "../helpers";
import { IItem } from "../types/SampleInterface";

interface IItemCardProps {
	item: IItem;
	deleteHandler: Function;
}

const ItemCard: React.FC<IItemCardProps> = ({ item, deleteHandler }) => {
	return (
		<div className='col-xl-6 mb-4'>
			<div className='card'>
				<div className='card-body'>
					<div className='w-100 justify-content-between align-items-center'>
						<div className='align-items-center'>
							<div className='ms-3'>
								<div className='d-flex justify-content-between'>
									<Link to={`/todo/items/${item.id}`}>{item.title}</Link>
									<span>{parseDate(item.createdAt!)}</span>
								</div>
								<p className='text-muted mb-0'>{item.description}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='card-footer border-0 bg-light p-2 d-flex justify-content-end'>
					<Link to={`/todo/items/${item.id}/update`} className='btn btn-primary me-2'>
						<FontAwesomeIcon icon='pen-to-square' />
					</Link>
					<button type='button' className='btn btn-danger' onClick={() => deleteHandler(item.id?.toString())}>
						<FontAwesomeIcon icon='trash' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
