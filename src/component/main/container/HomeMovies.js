import React, { useEffect, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestMovies } from "modules/movies"

import Loading from "component/common/Loading";
import Carousel from "component/common/Carousel"

import styled from "styled-components";

const Container = styled.div`
  margin: 2rem auto;
  width: 90vw;
`;
const Title = styled.div`
	font-size: 3rem;
	font-weight: bold;
	color:white;
`

const HomeMovies =  React.memo(({ props, name, title }) => {
	const URL = process.env[`REACT_APP_${props}`]
	const movies = useSelector(state => state.movies.data[name]);
	const dispatch = useDispatch();

	const requestMovieApi = useCallback((url) => {
		dispatch(requestMovies(name, url));
	}, [dispatch, name])

	useEffect(() => {
		requestMovieApi(URL)
	}, [requestMovieApi, URL])
	
	return (
		<>
		{ !movies ? <Loading /> :
		<Container>
			<Title>{title}</Title>
      <Carousel items={movies}/>
		</Container>
		}
		</>
	);
});
export default HomeMovies;