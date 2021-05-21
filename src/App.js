import { useMediaQuery } from "react-responsive";

import Home from "./component/home/Home";
import Navigation from "./component/header/Navigation";
import styled from "styled-components";


/* PC , 테블릿 가로 (해상도 768px ~ 1023px)*/ 
//@media all and (min-width:768px) and (max-width:1023px) { /*스타일입력*/} 
/* 테블릿 세로 (해상도 768px ~ 1023px)*/ 
//@media all and (min-width:768px) and (max-width:1023px) { /*스타일입력*/} 
/* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/ 
//@media all and (min-width:480px) and (max-width:767px) { /*스타일입력*/} 
/* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/ 
//@media all and (max-width:479px) { /*스타일입력*/}

const AppContainer = styled.div`
	
`;

const App = () => {
	// const isPc = useMediaQuery({
	// 	query : "(min-width:1024px)"
	// });
	// const isTablet = useMediaQuery({
	// 	query : "(min-width:768px) and (max-width:1023px)"
	// });
	// const isMobile = useMediaQuery({
	// 	query : "(max-width:767px)"
	// });

	return (
		<AppContainer>
			<Navigation />
			<Home />
			{/* {isPc && <div>PC</div>}
			{isTablet && <div>Tablet</div>}
			{isMobile && <div>Mobile</div>} */}
		</AppContainer>
	);
}

export default App;
