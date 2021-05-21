import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestMovies } from "../../modules/movies"
import Loading from "../common/Loading";

import HomeMovies from "./container/HomeMovies";

import styled from "styled-components";

const Container = styled.div`
`;

const Home = () => {
  const movies = useSelector((state) => state.movies);
	const dispatch = useDispatch();
	
	const requestMovieApi = useCallback(() => {
		dispatch(requestMovies(1))
	}, [dispatch])

	useEffect(() => {
		requestMovieApi()
	}, [])

  return (
    <Container>
      {movies.isLoading ? 
        <Loading /> :
        <HomeMovies movies={movies.data}/>
      }
  </Container>
  );
};
export default Home;