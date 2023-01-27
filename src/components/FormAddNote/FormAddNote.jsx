import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { AiOutlineClose } from "react-icons/ai";
import { Box } from "../Box";
import { addNote } from "../redux/Notes/notesSlice";
import {
  Title,
  StyledForm,
  StyledLabel,
  ButtonClose,
  StyledInput,
  TextArea,
  ButtonSave,
} from "./FormAddNote.styled";

const FormAddNote = ({ closeModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [beginTime, setBeginTime] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "date":
        setDate(value);
        break;
      case "beginTime":
        setBeginTime(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: nanoid(),
      title,
      description,
      date,
      beginTime,
      created: new Date().toLocaleString(),
    };

    dispatch(addNote(note));
    setTitle("");
    setDescription("");
    setDate("");
    setBeginTime("");

    closeModal();
  };

  return (
    <Box>
      <Box>
        <Title>Add new idea item</Title>
        <ButtonClose
          type="button"
          onClick={closeModal}
          aria-label="close modal"
        >
          <AiOutlineClose size={20} />
        </ButtonClose>
      </Box>

      <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <StyledLabel>
          Title
          <StyledInput
            type="text"
            aria-label="title"
            placeholder="Title goes here"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Descriptions
          <TextArea
            type="text"
            rows="5"
            aria-label="text"
            placeholder="Descriptions"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Date
          <StyledInput
            type="date"
            aria-label="date"
            name="date"
            value={date}
            onChange={handleChange}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Begin time
          <StyledInput
            type="time"
            aria-label="begin time"
            name="beginTime"
            value={beginTime}
            onChange={handleChange}
          />
        </StyledLabel>
        <ButtonSave type="submit" aria-label="save note">
          Save
        </ButtonSave>
      </StyledForm>
    </Box>
  );
};

export default FormAddNote;
