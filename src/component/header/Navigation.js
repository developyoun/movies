// import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  
`;

const NavButton = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  padding: 1rem;
  color: white;
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
