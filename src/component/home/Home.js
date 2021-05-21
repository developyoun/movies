import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestMovies } from "../../modules/movies"
import Loading from "../common/Loading";

import HomeMovies from "./container/HomeMovies";

import styled from "styled-components";

const Container = styled.div`
`;

const Home = () => {
  const {isRequest, data} = useSelector((state) => state.movies);
	const dispatch = useDispatch();
	
	const requestMovieApi = useCallback((queryNumber) => {
		dispatch(requestMovies(queryNumber))
	}, [dispatch])

	useEffect(() => {
		requestMovieApi(1)
    requestMovieApi(2)
    requestMovieApi(3)
    requestMovieApi(4)
	}, [])

  return (
    <Container>
      {isRequest ? 
        <Loading /> : 
        <>
          {data[1] && !data[1].isLoading && <HomeMovies movies={data[1].data} title={"1️⃣ 인기작"} />}
          {data[2] && !data[2].isLoading && <HomeMovies movies={data[2].data} title={"2️⃣ 인기작"} />}
          {data[3] && !data[3].isLoading && <HomeMovies movies={data[3].data} title={"3️⃣ 인기작"} />}
          {data[4] && !data[4].isLoading && <HomeMovies movies={data[4].data} title={"4️⃣ 인기작"} />}
        </>
      }
    </Container>
  );
};
export default Home;