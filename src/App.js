import { useSelector, useDispatch } from "react-redux";

function App() {
	const { value } = useSelector((state) => state.counter);

	const dispatch = useDispatch();

	return (
		<div>
		</div>
	);
}

export default App;
