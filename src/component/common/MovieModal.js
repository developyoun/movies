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
const ModalContents = styled.div`
  background-color: rgba(255,255,255, 0.4);
  padding: 20px;
`;
const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: bolder;
  color: black;
  `;
const ModalOverview = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const MovieModal = ({show, modalClose, movie}) => {
  console.log(movie)
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
        <ModalOverview>{movie.overview}</ModalOverview>
      </ModalContents>
      
    
    </ModalContainer>
  );
}
export default MovieModal;