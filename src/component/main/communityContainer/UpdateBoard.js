import { useState, useCallback } from "react";
import { useDispatch } from "react-redux"
import { requestCreate, requestUpdate } from "modules/board";

import { 
  TextField,
  Button,
} from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  border: 0.1rem solid #37474f;
  border-radius: 0.5rem;
  margin:5% 10vw 0 10vw;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TextBox = styled(TextField)`
  width: 80%;
  margin-top:${props => props.margintop ? props.margintop : "2rem"};
  .MuiInputBase-root {
    font-size: 2rem;
    background-color: #222;    
  }
  label{
    &.Mui-focused {
      color: #90a4ae;
    }
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #37474f;
    }
  }
`;
const SaveButton = styled(Button)`
  font-size: 3rem;
`;

const nowTime = () => {
  const date = new Date();
  const year=date.getFullYear(), 
    month=date.getMonth(), 
    day=date.getDate(), 
    hour=date.getHours(),
    minute=date.getMinutes();
  return `${year}-${month+1}-${day} ${hour}시${minute}분`
}

const CreateBoard = ({history, location}) => {
  const isUpdate = (location.state ? true : false)

  const [inputs, setInputs] = useState({
    title: isUpdate ? location.state.title : "",
    content: isUpdate ? location.state.content : "",
  });
  const dispatch = useDispatch();

  const submitDispatch = useCallback((data) => {
    console.log(data)
    if (isUpdate){
      dispatch(requestUpdate({...data, time:nowTime(), id:location.state.id}))
    } else{
      dispatch(requestCreate({...data, time:nowTime()}))
    }

    history.replace('/community')
  }, [dispatch, history])

  const inputEvent = e => {
    const { name, value } = e.target;
    setTimeout(() => {
      setInputs({
        ...inputs,
        [name]: value
      })
    }, 400)
  }

  return(
    <Container>
      <TextBox 
        label="제목"
        name="title"
        placeholder="글의 제목을 입력해주세요"
        variant="outlined"
        InputProps={{style:{fontSize:"2rem", color:"#b0bec5"}}}
        InputLabelProps={{style: {fontSize: "1.5rem", color:"#607d8b", fontWeight:"bold"}}}
        margintop="3rem"
        defaultValue={isUpdate ? location.state.title : ""}
        onChange={inputEvent}
      />
      <TextBox 
        label="제목"
        name="content"
        variant="outlined"
        placeholder="글의 내용을 입력해주세요"
        margin="normal"
        inputProps={{style:{fontSize:"2rem",color:"#b0bec5"}}}
        InputLabelProps={{style: {fontSize: "1.5rem", color:"#607d8b", fontWeight:"bold"}}}
        multiline
        rows={15}
        margintop="1.5rem"
        onChange={inputEvent}
        defaultValue={inputs.content}
      />
      <SaveButton
        variant="outlined"
        color="primary"
        onClick={() => submitDispatch(inputs)}
      >글 저장하기</SaveButton>
    </Container>
  )
}
export default CreateBoard;