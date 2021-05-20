import { useState } from "react"
import Slider from "react-slick";

import { Modal } from "react-bootstrap";
import {ImArrowRight, ImArrowLeft} from "react-icons/im" 
import styled from "styled-components";

const CustomSlider = styled(Slider)`
  .slick-slide {
    padding: 40px 0;
    div{
      outline: none;
    }
  }
`;

const Image = styled.img`
  width: 14vw;
  object-fit: contain;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover{
    transition: all 0.5s 0.5s;
    transform: scale(1.25);
  }
`;
const RightArrow = styled(ImArrowRight)`
  position: absolute;
  top: 50%;
  right: -3vw;
  font-size: 24px;
  color: #424242;
  cursor: pointer;
`
const LeftArrow = styled(ImArrowLeft)`
  position: absolute;
  top: 50%;
  left: -3vw;
  font-size: 24px;
  color: #424242;
  cursor: pointer;
`
const CustomNextArrow = ({onClick}) => (<RightArrow onClick={onClick} />)
const CustomPrevArrow = ({onClick}) => (<LeftArrow onClick={onClick} />)


function MyVerticallyCenteredModal({show, modalClose, movie}) {
  console.log(movie)
  return (
    <Modal
      show
      onHide={modalClose}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {movie.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
    </Modal>
  );
}



const Carousel = ({items}) => {
  const posterPath = 'https://image.tmdb.org/t/p/w300';
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const modalClose = () => setShow(false);
  const modalOpen = () => setShow(true);

  const config = {
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  }

  return (
    <>
      <CustomSlider {...config}>
        {items.map((item, index) => 
          <div key={index} >
            <Image 
              src={`${posterPath}${item.poster_path}`} 
              name={item.id} 
              onClick={() => {modalOpen(); setSelectedMovie(item);}}
            />
        </div>
        )}
      </CustomSlider>

      {show && <MyVerticallyCenteredModal
        movie={selectedMovie}
        show={show}
        modalClose={modalClose}
        />}
    </>
  )
}
export default Carousel