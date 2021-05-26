import HomeMovies from "./homeContainer/HomeMovies";

import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10rem;
`;

const Home = () => {

  return (
    <Container>
      <HomeMovies props={"NOW_PLAYING_URL"} name="nowPlay" title={"현재 상영작"}/>
      <HomeMovies props={"POPULAR_URL"} name="popular" title={"인기작"}/>
      <HomeMovies props={"TOP_RATED_URL"} name="topRated" title={"높은 평점순"}/>
      <HomeMovies props={"UPCOMING_URL"} name="upcoming" title={"상영 예정작"}/>
    </Container>
  );
};
export default Home;