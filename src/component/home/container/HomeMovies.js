import Carousel from "../../common/Carousel"

import styled from "styled-components";

const Container = styled.div`
  margin: 20px auto;
  width: 90vw;
`;
const Title = styled.div`
	font-size: 26px;
	font-weight: bold;
	color:white;
`

const HomeMovies = ({ movies }) => {
	return (
		<Container>
			<Title>👍	인기순</Title>
      <Carousel items={movies}/>
		</Container>
	);
};
export default HomeMovies;