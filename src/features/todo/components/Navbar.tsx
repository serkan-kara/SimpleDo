import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className='navbar container bg-body-tertiary'>
				<div className='container-fluid d-flex justify-content-between'>
					<Link className='navbar-brand' to={"/todo/items"}>
						<FontAwesomeIcon icon={"zap"} className='mr-2' />
						SimpleDO
					</Link>
					<Link to='/todo/create' className='btn btn-primary me-2'>
						Create New Todo
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
