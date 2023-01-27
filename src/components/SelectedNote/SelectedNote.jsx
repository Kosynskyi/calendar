import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { updateNote, deleteNote } from "../redux/Notes/notesSlice";
import { Box } from "../Box";
import Button from "../Button";

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
      <h2>Edit idea item</h2>
      <p>Created at {created}</p>
      {note.updated && <p>Updated at {note.updated}</p>}
      <Button type="button" onClick={closeModal}>
        <AiOutlineClose />
      </Button>

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <label>
          Date
          <input type="date" name="date" value={date} onChange={handleChange} />
        </label>
        <label>
          Begin time
          <input
            type="time"
            name="beginTime"
            value={beginTime}
            onChange={handleChange}
          />
        </label>

        <Button type="button" onClick={() => deleteSelectedNote(id)}>
          Delete
        </Button>
        <Button type="submit">Save</Button>
      </form>
    </Box>
  );
};

export default SelectedNote;
