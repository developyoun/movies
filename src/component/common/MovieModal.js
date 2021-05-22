import React, { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import YouTube from "react-youtube";
import { requestYoutube } from "modules/youtube";
import Loading from "component/common/Loading";

import styled from "styled-components";
import { Rating } from '@material-ui/lab';
import { Modal } from "react-bootstrap";

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
const GENRE_SET = {
  28:"액션", 12:"모험", 16:"애니메이션",35:"코미디", 80:"범죄", 99: "다큐멘터리", 18:"드라마", 
  10751:"가족", 14:"판타지", 36:"역사", 27:"공포", 10402:"음악", 9648:"미스터리", 10749:"로맨스", 
  878:"SF", 10770:"TV 영화", 53:"스릴러", 10752:"전쟁", 37:"서부"
}

const ModalContainer = styled(Modal)`
  background-color: rgba(0,0,0,0.2);
  
  .modal-content{
    background-image: url(${props => props.backgroundimage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
  }
`;
const Frame = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;
const YoutubeFrame = styled(YouTube)`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const ModalContents = styled(Modal.Body)`
  background-color: rgba(255,255,255, 0.6);
  padding: 0;
  color: black;
`;
const NoVideo = styled.div`
  height: 30vh;
  line-height: 30vh;
  margin: auto 1.5rem;
  text-align: center;
  
  font-size: 2.5rem;
  font-weight: 700;
`;
const ModalTitle = styled.div`
  font-size: 2.8rem;
  font-weight: bolder;
  color: black;
  margin: 2rem 0 2rem 2rem;
  `;
const FlexDiv = styled.div`
  display: flex;
`;
const ModalOverview = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 1rem;
`;
const ModalGenre = styled.span`
  font-size: 2.8rem;
  font-weight: 600;
  span{
    margin-left: 0.8rem;
    text-decoration: underline;
    text-align: center;
    vertical-align: center;
  }
`;
const ModalRelease = styled.span`
  margin: 0 1rem;
  font-weight: 600;
  font-size: 2.4rem;
`;
const ModalLeft = styled.div`
  flex-basis: 50%;
`;
const ModalRight = styled.div`
  flex-basis: 50%;
  margin: 1.2rem;
`;

const MovieModal = React.memo(({show, modalClose, movie}) => {
  const dispatch = useDispatch();
  const {isLoading, data} = useSelector(state => state.youtube)

  const getVideoUrl = useCallback(() => dispatch(requestYoutube(movie.id)), [dispatch, movie.id])
  
  useEffect(() => {
    getVideoUrl()
  }, [getVideoUrl])

  return (
    <ModalContainer
      show={show}
      onHide={modalClose}
      size="lg"
      scrollable
      backgroundimage={`${IMAGE_PATH}${movie.poster_path}`}
      >
      <ModalContents>        
        <ModalTitle>{movie.title}<br />({movie.original_title})</ModalTitle>
          { isLoading ? <Loading /> : 
            !data.length ? <NoVideo>
              🙅‍♂️ 제공되는 영상이 없습니다.
            </NoVideo> : 
            <Frame>
              <YoutubeFrame videoId={data[0].key} />
            </Frame>
          }
        <FlexDiv>
          <ModalLeft>
            <div style={{fontSize: "2rem", fontWeight: "bolder", margin: "10px"}}>줄거리</div>
            <ModalOverview>{movie.overview || "😓 등록된 줄거리가 없습니다"}</ModalOverview>
          </ModalLeft>

          <ModalRight>
            <div style={{margin: "1rem"}}>
              <span style={{fontSize: "2.4rem", fontWeight: "bold"}}>장르 :</span>
              <ModalGenre>
                {movie.genre_ids.map((genreId, index) => <span key={index}>{GENRE_SET[genreId]}</span>)}
              </ModalGenre>
            </div>
            <div style={{margin: "1rem"}}>
              <span style={{fontSize: "2.3rem", fontWeight: "bolder"}}>개봉일: </span>
              <ModalRelease>
                {movie.release_date}
              </ModalRelease>
            </div>
            <div style={{margin: "1rem"}}>
              <span style={{fontSize: "2.4rem", fontWeight: "bold"}}>평점: </span>
              <ModalRelease>
                <Rating style={{fontSize:"8rem"}} value={movie.vote_average/2} precision={0.01} readOnly/>{"  "}
                {movie.vote_average}
              </ModalRelease>
            </div>

          </ModalRight>
        </FlexDiv>
      </ModalContents>
    </ModalContainer>
  );
});
export default MovieModal;