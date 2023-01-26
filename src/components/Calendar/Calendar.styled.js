import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, auto));
  grid-template-rows: repeat(6, minmax(100px, auto));
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  padding: 10px;
  background-color: green;
  outline: 1px solid red;
`;

export const DayInfo = styled.p`
  margin: 0;
`;

export const NoteTitle = styled.div`
  margin: 0;
  margin-top: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
`;
