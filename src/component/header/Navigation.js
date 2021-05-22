import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
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
    </Container>
  )
};
export default Navigation;
