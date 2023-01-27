import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdSave } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateNote, deleteNote } from "../redux/Notes/notesSlice";
import { Box } from "../Box";
import {
  Title,
  StyledForm,
  StyledLabel,
  StyledInput,
  TextArea,
  ButtonClose,
} from "../FormAddNote/FormAddNote.styled";
import { NoteTime, Span, Button } from "./SelectedNote.styled";

const SelectedNote = ({ closeModal, note }) => {
  const [id] = useState(note.id);
  const [title, setTitle] = useState(note.title);
  const [created] = useState(note.created);
  const [description, setDescription] = useState(note.description);
  const [date, setDate] = useState(note.date);
  const [beginTime, setBeginTime] = useState(note.beginTime);
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
    dispatch(
      updateNote({
        id,
        title,
        description,
        date,
        beginTime,
        updated: new Date().toLocaleString(),
      })
    );
    closeModal();
  };

  const deleteSelectedNote = (id) => {
    dispatch(deleteNote(id));
    closeModal();
  };

  return (
    <Box>
      <Title>Edit idea item</Title>
      <NoteTime>
        Created at: <Span>{created}</Span>
      </NoteTime>
      {note.updated && (
        <NoteTime>
          Updated at: <Span>{note.updated}</Span>
        </NoteTime>
      )}
      <ButtonClose type="button" onClick={closeModal}>
        <AiOutlineClose size={20} />
      </ButtonClose>

      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Title
          <StyledInput
            type="text"
            aria-label="title"
            placeholder="Title goes here"
            name="title"
            required
            value={title}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Description
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
            name="date"
            aria-label="date"
            required
            value={date}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Begin time
          <StyledInput
            type="time"
            name="beginTime"
            aria-label="begin time"
            value={beginTime}
            onChange={handleChange}
          />
        </StyledLabel>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Button
            type="button"
            aria-label="delete note"
            onClick={() => deleteSelectedNote(id)}
          >
            <RiDeleteBin6Line size={25} color="red" />
          </Button>
          <Button type="submit" aria-label="update note">
            <IoMdSave size={25} color="#1FF124" />
          </Button>
        </Box>
      </StyledForm>
    </Box>
  );
};

export default SelectedNote;
