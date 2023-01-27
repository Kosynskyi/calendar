import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, auto));
  grid-template-rows: repeat(3, minmax(50px, auto));
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Month = styled.p`
  margin: 0;
  padding: 0;
`;

export const Year = styled.p`
  margin: 0;
  padding: 0 20px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
