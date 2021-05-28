import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import SearchButton from "./SearchBar";

import { requestSearch } from "modules/search"

import styled from "styled-components";
import { useCallback } from "react";

const Container = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index:2; 
  background-color: #111;
`;

const NavButton = styled(NavLink)`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1rem;
  color: white;
  flex: 1;
  text-align: center;
`;
const LogoButton = styled.img`
  width: 20rem;
`;

const Navigation = () => {
  const LOGO = `${process.env.PUBLIC_URL}/logo.png`
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(requestSearch(""))
  }, [dispatch])

	return(
    <Container>
      <NavButton onClick={onClick} to="/"><LogoButton src={LOGO} alt="logo" /></NavButton>
      <NavButton to="/">Collections</NavButton>
      <NavButton onClick={onClick} to="/community">Community</NavButton>
      <NavButton to="/2">INFO</NavButton>
      <SearchButton />
    </Container>
  )
};
export default Navigation;
