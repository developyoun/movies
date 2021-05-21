// import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #c5cae9;
`;

const NavButton = styled.div`
  font-size: 1rem;
  padding: 10px;
`;

const Navigation = () => {
	return(
    <Container>
      <NavButton>HOME</NavButton>
      <NavButton>Category</NavButton>
      <NavButton>Community</NavButton>
      <NavButton>INFO</NavButton>
    </Container>
  )
};
export default Navigation;
