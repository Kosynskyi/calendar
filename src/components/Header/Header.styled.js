import styled from "styled-components";

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

export const ButtonCalendar = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    transform: scale(1.1);
  }
`;
