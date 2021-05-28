import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SearchResultComponent from "component/main/SearchResults"
import Home from "./component/main/Home";
import Community from "component/main/Community"
import Navigation from "./component/header/Navigation";
import UpdateBoard from "component/main/communityContainer/UpdateBoard";
import Info from "component/main/Info";

import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
	*{
		/* font-size: 62.5%; */
		box-sizing: border-box;
		margin: 0;
		padding: 0;

		@media all and (min-width:1024px){
			font-size: 62.5%;
		};
		@media all and (min-width:768px) and (max-width:1023px){
			font-size: 55%;
		};
		@media all and (max-width:767px){
			font-size: 40%;
		};
	}
	body{
		color: white;
		background-color: #111;
	}
`;

/* PC , 테블릿 가로 (해상도 768px ~ 1023px)*/ 
//@media all and (min-width:768px) and (max-width:1023px) { /*스타일입력*/} 
/* 테블릿 세로 (해상도 768px ~ 1023px)*/ 
//@media all and (min-width:768px) and (max-width:1023px) { /*스타일입력*/} 
/* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/ 
//@media all and (min-width:480px) and (max-width:767px) { /*스타일입력*/} 
/* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/ 
//@media all and (max-width:479px) { /*스타일입력*/}

const AppContainer = styled.div``;

const App = () => {
	const isPc = useMediaQuery({
		query : "(min-width:1024px)"
	});
	const isTablet = useMediaQuery({
		query : "(min-width:768px) and (max-width:1023px)"
	});
	const isMobile = useMediaQuery({
		query : "(max-width:767px)"
	});

	const {searchInput, isLoading, error, data} = useSelector(state => state.search)

	return (
		<BrowserRouter>
			<GlobalStyle />
			<AppContainer>
				<Navigation />
				{searchInput ? 
					<SearchResultComponent 
						isLoading={isLoading}
						error={error}
						movies={data}
					/> :
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/community" component={Community} />
						<Route path="/community/update" component={UpdateBoard} />
						<Route path="/info" component={Info} /> 
					</Switch>
				}
				{/* {isPc && <div>PC</div>}
				{isTablet && <div>Tablet</div>}
				{isMobile && <div>Mobile</div>} */}
			</AppContainer>
		</BrowserRouter>
	);
}

export default App;
