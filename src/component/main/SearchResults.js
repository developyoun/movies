import React, { useState } from "react";

import Loading from "component/common/Loading";
import MovieModal from "component/common/MovieModal";

import styled from "styled-components";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";

const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin: auto;
`;
const MovieDiv = styled.div`
	display: flex;
	padding: 3rem;
`;
const MovieImage = styled.img`
	width: 22rem;
	box-shadow: 1px 1px 1px gray;
	transition: all 0.4s ease-in-out;
	&:hover {
		cursor: pointer;
		transition: all 0.4s;
		transform: scale(1.1);
	}
`;

const SearchResultComponent = React.memo(({ isLoading, movies }) => {
	const [show, setShow] = useState(false);
	const [selectedMovie, setSelectedMovie] = useState(null);

	if (isLoading) return <Loading />;

	const modalClose = () => setShow(false);
	const modalOpen = () => setShow(true);

	return (
		<>
			{!movies.length ? (
				<div>검색 결과가 없습니다.</div>
			) : (
				<Container>
					{movies.map((movie) => (
						<MovieDiv key={movie.id}>
							<MovieImage
								src={`${IMAGE_PATH}${movie.poster_path}`}
								alt={movie.id}
								onClick={() => {
									modalOpen();
									setSelectedMovie(movie);
								}}
							/>
						</MovieDiv>
					))}
				</Container>
			)}
			{show && <MovieModal movie={selectedMovie} show={show} modalClose={modalClose} />}
		</>
	);
});
export default SearchResultComponent;
