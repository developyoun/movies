import React from "react";
import Carousel from "../../common/Carousel"

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

const HomeMovies =  React.memo(({ movies, title }) => {
	return (
		<Container>
			<Title>{title}</Title>
      <Carousel items={movies}/>
		</Container>
	);
});
export default HomeMovies;