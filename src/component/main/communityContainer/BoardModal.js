import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

const ModalContainer = styled(Modal)`
  
  .modal-content{
    background-color: #212121;
    font-size: 3rem;
  }
`;
const Title = styled.div`
  font-size: 3.2rem;
  margin: 1rem;
  color: #e0e0e0;
`;
const BodyContainer = styled.div`
  margin: 1.5rem;
  font-size: 1.8rem;
  color: #e0e0e0;
`;

const BoardModal = ({showOff, post}) => {
  console.log(post)
  return (
    <ModalContainer
      size="lg"
      show={true}
      onHide={showOff}
    >
      <Modal.Header>
        <Modal.Title>
          <Title>{post.title}</Title>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BodyContainer>
          {post.content}
        </BodyContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" style={{fontSize:"1.6rem"}} onClick={showOff}>
          Close
        </Button>
      </Modal.Footer>
    </ModalContainer>
  )}
export default BoardModal;