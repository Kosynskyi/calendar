import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalWindow = styled.div`
  position: relative;
  padding: 20px;
  max-width: calc(100vw - 100px);
  max-height: calc(100vh - 24px);
  background-color: rgba(120, 188, 240, 0.9);
  border-radius: 6px;
`;
