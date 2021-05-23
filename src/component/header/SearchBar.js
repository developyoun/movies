import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { requestSearch } from "modules/search";
import useDebounce from "component/common/useDebounce";

import { TextField, Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import styled from "styled-components";

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`;

const SearchButtonIcon = styled(Search)`
  margin-right: 1rem;
  color: white;
  font-size: 3.5rem;
  &:hover{
    cursor: pointer;
  }
`;
const InputBar = styled(TextField)`
  Input{
    font-size: 1.6rem;
    color: white;
    width: 20rem;
  };
`;

const SearchButton = () => {
  const dispatch = useDispatch();
  const [inputContent, setInputContent] = useState("");
  
  const debounceValue = useDebounce(inputContent, 800);
  
  const debouncedChangeEvent = useCallback((input) => {
    dispatch(requestSearch(input))
  }, [dispatch])


  useEffect(() => {
    debouncedChangeEvent(debounceValue)
  }, [debouncedChangeEvent, debounceValue])

  const onChange = e => setInputContent(e.target.value);

  return (
    <ButtonContainer>
      <Grid container alignItems="flex-end">
        <Grid item>
          <SearchButtonIcon />
        </Grid>
        <Grid item>
          <InputBar 
            label="Search..."
            autoFocus
            color="secondary"
            InputLabelProps={{
              style:{
                fontSize:"1.5rem",
                color:"#aaa"
              }
            }}
            onChange={onChange}
            />
        </Grid>
      </Grid>
    </ButtonContainer>
  );
}
export default SearchButton;