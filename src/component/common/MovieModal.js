import React, { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import YouTube from "react-youtube";
import { requestYoutube } from "modules/youtube";
import Loading from "component/common/Loading";

import styled from "styled-components";
import { Modal } from "react-bootstrap";

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

const ModalContainer = styled(Modal)`
  .modal-content{
    background-image: url(${props => props.backgroundimage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
  }
`;
const ModalContents = styled(Modal.Body)`
  background-color: rgba(255,255,255, 0.4);
  padding: 0;
`;
const ModalTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: black;

  margin: 20px 0 20px 20px;
  `;
const ModalOverview = styled.div`
  font-size: 1.1rem;
  font-weight: 600;

  margin: 20px;
`;
const Frame = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

  /* margin: 10px 0; */
`;
const YoutubeFrame = styled(YouTube)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const MovieModal = React.memo(({show, modalClose, movie}) => {
  const dispatch = useDispatch();
  const {isLoading, data} = useSelector(state => state.youtube)

  const getVideoUrl = useCallback(() => dispatch(requestYoutube(movie.id)), [dispatch, movie.id])
  useEffect(() => {
    getVideoUrl()
  }, [])
  return (
    <ModalContainer
      show={show}
      onHide={modalClose}
      size="lg"
      scrollable={true}
      backgroundimage={`${IMAGE_PATH}${movie.poster_path}`}
      >
      <ModalContents>        
        <ModalTitle>{movie.title}<br />({movie.original_title})</ModalTitle>
          { isLoading || !data.length ? <Loading /> : 
            <Frame>
              <YoutubeFrame videoId={data[0].key} />
            </Frame>}
        <ModalOverview>{movie.overview}</ModalOverview>
      </ModalContents>
    </ModalContainer>
  );
});
export default MovieModal;