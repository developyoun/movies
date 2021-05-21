import { useState } from "react"
import Slider from "react-slick";
import MovieModal from "./MovieModal";

import {ImArrowRight, ImArrowLeft} from "react-icons/im" 
import styled from "styled-components";
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

const CustomSlider = styled(Slider)`
  .slick-slide {
    /* padding: 40px 0; */
    padding: 4rem 0;
    div{
      outline: none;
    }
  }
`;

const Image = styled.img`
  width: 17.5vw;
  object-fit: contain;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  border-radius: 7px;
  &:hover{
    transition: all 0.5s 0.5s;
    transform: scale(1.4);
  }
`;
const RightArrow = styled(ImArrowRight)`
  position: absolute;
  top: 45%;
  right: -3vw;
  font-size: 2.4rem;
  color: #424242;
  cursor: pointer;
`
const LeftArrow = styled(ImArrowLeft)`
  position: absolute;
  top: 45%;
  left: -3vw;
  font-size: 2.4rem;
  color: #424242;
  cursor: pointer;
`
const CustomNextArrow = ({onClick}) => (<RightArrow onClick={onClick} />)
const CustomPrevArrow = ({onClick}) => (<LeftArrow onClick={onClick} />)

const Carousel = ({items}) => {
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const modalClose = () => setShow(false);
  const modalOpen = () => setShow(true);

  const config = {
    slidesToShow: 5,
    slidesToScroll: 2,
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
              src={`${IMAGE_PATH}${item.backdrop_path}`} 
              name={item.id} 
              onClick={() => {modalOpen(); setSelectedMovie(item);}}
            />
        </div>
        )}
      </CustomSlider>

      {show && <MovieModal
        movie={selectedMovie}
        show={show}
        modalClose={modalClose}
        />}
    </>
  )
}
export default Carousel