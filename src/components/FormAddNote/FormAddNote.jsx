import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { AiOutlineClose } from "react-icons/ai";
import { Box } from "../Box";
import { addNote } from "../redux/Notes/notesSlice";
import Button from "../Button";
import { Title, StyledForm, StyledLabel } from "./FormAddNote.styled";

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
    console.log(note);
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
        <Button
          type="button"
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
          }}
        >
          <AiOutlineClose />
        </Button>
      </Box>

      <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <StyledLabel>
          Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Descriptions
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Date
          <input type="date" name="date" value={date} onChange={handleChange} />
        </StyledLabel>
        <StyledLabel>
          Begin time
          <input
            type="time"
            name="beginTime"
            value={beginTime}
            onChange={handleChange}
          />
        </StyledLabel>
        <Button type="submit">Save</Button>
      </StyledForm>
    </Box>
  );
};

export default FormAddNote;
