import { useState } from "react";

import { TextField, InputAdornment, Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import styled from "styled-components";

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchButtonIcon = styled(Search)`
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
  };
`;


const SearchButton = () => {
  const [searchInput, setSearchInput] = useState("");

  const onChange = e => setSearchInput(e.target.value);

  return (
    <ButtonContainer>
      {/* <InputBar 
        autoFocus
        onChange={onChange}
        variant="outlined"
        color="secondary"
        label="search"
        InputLabelProps={{
          style:{
            fontSize:"2rem",
            color:"white"
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchButtonIcon />
            </InputAdornment>
          ),
        }}
        /> */}
        <Grid container spacing={1} alignItems="flex-end">
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