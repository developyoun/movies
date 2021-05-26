import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestRead, requestDelete } from "modules/board";
import { Link } from "react-router-dom";

import Loading from "component/common/Loading"
import BoardList from "./communityContainer/BoardList";

import { Button } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import { useCallback } from "react";

const ButtonAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  };
  25% {
    transform: rotate(6deg);
  };
  50% {
    transform: rotate(0deg);
  };
  75% {
    transform: rotate(-6deg);
  };
  100%{
    transform: rotate(0deg)
  };
`;

const Container = styled.div`
`;
const PostButton = styled(Button)`
	font-size: 2rem;
  font-weight: bold;
	/* color: #78909c; */
  
	border: 0.2rem solid #303f9f;
	:hover {
		background-color: #303f9f;
		color: rgba(0, 0, 0, 1);
		animation: ${ButtonAnimation} 0.9s infinite linear;
	}
  position: absolute;
  right: 5vw;
`;

const Community = ({ history }) => {
	const { isLoading, data } = useSelector((state) => state.board);
	const dispatch = useDispatch();

	const getBoard = useCallback(() => {
		dispatch(requestRead());
	}, [dispatch]);
  const deleteBoard = useCallback((id) => {
    dispatch(requestDelete(id));
  }, [dispatch])

	useEffect(() => {
		getBoard();
	}, []);

  if (isLoading) return <Loading />;
	return (
		<Container>
      {
        data.length ? 
        <BoardList 
          posts={data} 
          history={history}
          deleteBoard={deleteBoard}
        /> : 
        <div>글이 하나도 없습니다 😭</div> 
      }
			<Link to="/community/create" style={{textDecoration:"none"}}>
				<PostButton variant="outlined" color="primary">
					새로운 글 작성하기
				</PostButton>
			</Link>
		</Container>
	);
};
export default Community;
