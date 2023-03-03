import ItemForm from "../components/Form";
import Navbar from "../components/Navbar";

const CreateItem = () => {
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
			<ItemForm />
		</div>
	);
};

export default CreateItem;
