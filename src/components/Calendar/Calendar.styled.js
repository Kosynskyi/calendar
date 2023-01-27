import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, 1fr));
  grid-template-rows: repeat(6, minmax(100px, 1fr));
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  padding: 10px;
  background-color: green;
  border-radius: 6px;
  border: 1px solid red;
  transition: 500ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DayInfo = styled.p`
  margin: 0;
`;

export const NoteTitle = styled.div`
  margin: 0;
  margin-top: 5px;
  padding: 2px 2px;
  text-align: center;
  /* border: 1px solid #8e1ff6; */
  background-color: #fff;
  border-radius: 5px;
  font-size: 12px;
  max-width: 90%;
  overflow: hidden;
  cursor: pointer;
`;
