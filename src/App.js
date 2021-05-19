import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	requestMovies,
	successMovies,
	failureMovies,
} from "./modules/movies"

function App() {
	const movies = useSelector((state) => state.movies);
	const dispatch = useDispatch();
	
	const requestMovieApi = useCallback(() => {
		dispatch(requestMovies())
	}, [dispatch])

	useEffect(() => {
		requestMovieApi()
	}, [])

	return (
		<div>
			
		</div>
	);
}

export default App;
