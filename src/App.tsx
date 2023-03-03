import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import InstructionsView from "./app/views/InstructionsView";
import CreateItem from "./features/todo/views/CreateItem";
import ItemDetail from "./features/todo/views/ItemDetail";
import Items from "./features/todo/views/Items";
import SampleView from "./features/todo/views/SampleView";
import UpdateItem from "./features/todo/views/UpdateItem";

function App() {
	return (
		<Routes>
			<Route path='/*' element={<Outlet />}>
				<Route path='todo/*' element={<Outlet />}>
					<Route path='sample-route' element={<SampleView />} />

					{/* Please put your routes here. */}
					<Route path='items' element={<Items />} />
					<Route path='items/:id' element={<ItemDetail />} />
					<Route path='items/:id/update' element={<UpdateItem />} />
					<Route path='create/' element={<CreateItem />} />

					<Route path='*' element={<Navigate to='/sample-route' replace />} />
				</Route>

				<Route path='instructions' element={<InstructionsView />} />
				<Route path='*' element={<Navigate to='/instructions' replace />} />
			</Route>
		</Routes>
	);
}

export default App;
