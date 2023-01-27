import styled from "styled-components";

export const NoteTime = styled.p`
  margin: 0;
  font-size: 16px;
`;

export const Span = styled.span`
  font-size: 14px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: 500ms;

  &:hover {
    transform: scale(1.2);
  }
`;
