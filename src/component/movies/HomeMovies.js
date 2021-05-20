import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestMovies } from "../../modules/movies"
import Loading from "../common/Loading";

import styled from "styled-components";

const Container = styled.div``;

const HomeMovies = () => {
  const movies = useSelector((state) => state.movies);
	const dispatch = useDispatch();
	
	const requestMovieApi = useCallback(() => {
		dispatch(requestMovies())
	}, [dispatch])

	useEffect(() => {
		requestMovieApi()
	}, [])

  return <Container>
    {
      movies.isLoading ? 
        <Loading /> :
        null
    }
  </Container>
}
export default HomeMovies;