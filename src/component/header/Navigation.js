import { NavLink } from "react-router-dom";
import SearchButton from "./SearchBar";

import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 1; 
  background-color: #111;
`;

const NavButton = styled(NavLink)`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1rem;
  color: white;
  flex: 1;
`;
const LogoButton = styled.img`
  width: 20rem;
`;

const Navigation = () => {
  const LOGO = `${process.env.PUBLIC_URL}/logo.png`

	return(
    <Container>
      <NavButton to="/"><LogoButton src={LOGO} alt="logo" /></NavButton>
      <NavButton to="/">Category</NavButton>
      <NavButton to="/1">Community</NavButton>
      <NavButton to="/2">INFO</NavButton>
      <SearchButton />
    </Container>
  )
};
export default Navigation;
