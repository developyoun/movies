import { Button } from "@material-ui/core";
import { Table } from "react-bootstrap";
import styled from "styled-components";

const Container = styled(Table)`
  width: 80%;
  margin: 2rem auto;
  border-radius: 3px;
  background-color: #111;
`;
const RowDiv = styled.tr`
  font-size: ${props => props.fontsize || "3.2rem" };
  color: #bdbdbd;
  text-align: center;
  line-height: 10vh;
  height: 10vh;
  :hover{
    cursor: pointer;
  }
`;
const Tbody = styled.tbody`
  margin: 1rem;
`;
const UpdateButton = styled(Button)`
  font-size: 2rem;
  margin: 0 1rem;
`;

const BoardList = ({posts}) => {
  return(
    <Container 
      hover 
      responsive
      variant="dark"
    >
      <thead>
        <RowDiv>
          <th width="28%">글 번호</th>
          <th width="28%">글 제목</th>
          <th width="28%">작성 시간</th>
          <th width="28%">✍🏿</th>
        </RowDiv>
      </thead>
      <Tbody>
      {posts.map((post, idx) => (
        <>
          <RowDiv fontsize="2.4rem">
            <td>{posts.length-idx}</td>
            <td>{post.title}</td>
            <td>123</td>
            <td>
              <UpdateButton
                variant="outlined"
                color="primary"
                >수정</UpdateButton>
              <UpdateButton
                variant="outlined"
                color="secondary"
                >삭제</UpdateButton>
            </td>
          </RowDiv>
        </>
      ))}
      </Tbody>
    </Container>
  )
}
export default BoardList;