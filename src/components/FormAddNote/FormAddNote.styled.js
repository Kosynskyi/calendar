import styled from "styled-components";

export const Title = styled.h2`
  margin: 8px 0;
  color: white;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: white;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    transform: scale(1.1);
    color: red;
  }
`;

export const StyledInput = styled.input`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1px;
`;

export const TextArea = styled.textarea`
  padding: 4px;
  margin-bottom: 8px;
  resize: none;
  border-radius: 4px;
  border: 1px;
`;

export const ButtonSave = styled.button`
  padding: 4px;
  border-radius: 6px;
  cursor: pointer;
  transition: 500ms;
  border: none;

  &:hover {
    background-color: rgba(120, 240, 123, 0.8);
    transform: scale(1.05);
  }
`;
