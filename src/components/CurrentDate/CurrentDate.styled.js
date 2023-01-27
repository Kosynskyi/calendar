import styled from "styled-components";

export const Text = styled.p`
  margin: 0;
  padding-left: 30px;
  padding-right: 30px;
  width: 120px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

export const StyledButton = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: none;
  background-color: rgba(48, 186, 245, 0.8);
  transition: 500ms;

  &:hover {
    transform: scale(1.1);
  }
`;
