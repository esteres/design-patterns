import { useState } from "react"
import styled from "styled-components";

const ModalBackgroud = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000067;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;
export const Modal = ({children}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true) }>Show Modal</button>
      {show && (
        <ModalBackgroud onClick={() => setShow(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <button onClick={() => setShow(false)}>Hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackgroud>
      )}
    </>
  );
}