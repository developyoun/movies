import { useState } from "react"
import Slider from "react-slick";
import MovieModal from "./MovieModal";

import {CgArrowLeftO, CgArrowRightO} from "react-icons/cg" 
import styled from "styled-components";
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

const CustomSlider = styled(Slider)`
  .slick-slide {
    padding: 3.2rem 0.4rem;
    div{
      outline: none;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  border-radius: 7px;
  &:hover{
    transition: all 0.5s 0.5s;
    transform: scale(1.4);
  }
`;

const RightArrow = styled(CgArrowRightO)`
  position: absolute;
  top: 45%;
  right: -3vw;
  font-size: 3rem;
  color: #999;
  cursor: pointer;
`
const LeftArrow = styled(CgArrowLeftO)`
  position: absolute;
  top: 45%;
  left: -3vw;
  font-size: 3rem;
  color: #999;
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
    slidesToShow: 6,
    slidesToScroll: 4,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
        }
      }
    ],
  }
  
  return (
    <>
      <CustomSlider {...config}>
        {items.map((item, index) => 
          item.backdrop_path && <div key={index}>
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