import styled from "styled-components";

const Container = styled.div`
  
  
`;

const Video = styled.video`
  width: 100%;
  filter: opacity(40%);
`;

const Banner = () => {
  return (
    <Container>
      <Video 
        autoPlay
        loop 
        src="/video2.mp4" 
      />
    </Container>
  )
}
export default Banner;